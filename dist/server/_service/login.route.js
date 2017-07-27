"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../_model/index");
var index_2 = require("../_common/index");
exports.login = express_1.Router();
exports.login.post('/login', index_2.authorization({
    global: { mustBeLogged: false }
}), function (request, response) {
    index_1.UserModel.findOne({
        $and: [{
                username: { $exists: true }
            }, {
                email: { $exists: true }
            }, {
                $or: [{
                        email: request.body.login
                    }, {
                        username: request.body.login
                    }]
            }, {
                password: request.body.password
            }],
    }, function (error, user) {
        if (error)
            return response.handler({ DBError: true, error: error });
        if (user)
            response.handler({ type: true, data: { token: user.token } });
        else
            response.handler({ type: false });
    });
});

//# sourceMappingURL=login.route.js.map
