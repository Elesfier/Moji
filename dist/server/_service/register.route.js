"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../_model/index");
var index_2 = require("../_common/index");
var index_3 = require("../_common/index");
var jwt = require("jsonwebtoken");
exports.register = express_1.Router();
exports.register.post('/register', index_3.authorization({
    global: { mustBeLogged: false, allowed: true }
}), function (request, response) {
    index_1.UserModel.findOne({
        $or: [
            { username: request.body.username },
            { email: request.body.email }
        ]
    }, function (error, user) {
        if (error)
            return response.handler({ DBError: true, error: error });
        var userData = request.body;
        if (user) {
            userData.username = userData.username.toLowerCase();
            userData.email = userData.email.toLowerCase();
            if (user.username == userData.username && user.email == userData.email) {
                response.handler({ type: 'USER_EXIST_WITH_EMAIL_AND_USERNAME' });
            }
            else if (user.email == userData.email) {
                response.handler({ type: 'USER_EXIST_WITH_EMAIL' });
            }
            else if (user.username == userData.username) {
                response.handler({ type: 'USER_EXIST_WITH_USERNAME' });
            }
        }
        else {
            var newUser = new index_1.UserModel({
                username: userData.username,
                password: userData.password,
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                token: index_2.generateRandomString(),
                notifications: [],
                setting: {}
            });
            newUser.save().then(function (createdUser) {
                createdUser.token = jwt.sign({
                    _id: createdUser._id,
                    username: userData.username,
                    password: userData.password,
                    email: userData.email
                }, index_3.JWT_TOKEN_SECRET);
                createdUser.save().then(function () {
                    response.handler({ type: 'USER_CREATED' });
                });
            });
        }
    });
});

//# sourceMappingURL=register.route.js.map
