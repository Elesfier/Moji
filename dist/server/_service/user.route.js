"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../_common/index");
exports.user = express_1.Router();
exports.user.get('/user', index_1.authorization({
    project: {},
    global: { mustBeLogged: true },
    get: ['notifications', 'allowed']
}), function (request, response) {
    console.log(request['_currentUser']);
    console.log(request['_get']);
    response.handler({
        type: 'USER_DATA',
        data: {
            username: request['_currentUser'].username,
            firstname: request['_currentUser'].firstname,
            lastname: request['_currentUser'].lastname,
            setting: request['_currentUser'].setting,
            notifications: request['_get'].notifications,
            allowed: request['_get'].allowed
        }
    });
});

//# sourceMappingURL=user.route.js.map
