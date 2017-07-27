"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../_model/index");
var jwt = require("jsonwebtoken");
var index_2 = require("./gets/index");
var config = require('../../../Moji.config')();
exports.JWT_TOKEN_SECRET = process.env.MOJI_JWT_TOKEN_SECRET
    || config.jwt_token_secret;
function preAuthorization(request, response, next) {
    var _this = this;
    var global = this.global || {};
    if (global.allowed === false) {
        return response.handler({ status: 403, type: 'NOT_ALLOWED' });
    }
    if (global.mustBeLogged === true || global.mustBeLogged === undefined) {
        var token = request.get("Authorization") || request.query.token;
        if (typeof token !== 'undefined') {
            jwt.verify(token, exports.JWT_TOKEN_SECRET, function (error, decoded) {
                if (error || (!decoded) || (!decoded._id))
                    return response.handler({ status: 403, type: 'WRONG_TOKEN' });
                index_1.UserModel.findById(decoded._id, function (error, user) {
                    if (error)
                        return response.handler({ DBError: true, error: error });
                    request['_currentUser'] = user;
                    if (_this.get && _this.get.length !== 0) {
                        request['_get'] = {};
                        _this.get.forEach(function (getOption, index) {
                            index_2.gets[getOption](request, function () {
                                if (index === _this.get.length - 1)
                                    next();
                            });
                        });
                    }
                    next();
                });
            });
        }
        else {
            response.handler({ status: 403, type: 'NO_TOKEN' });
        }
    }
    else {
        next();
    }
}
function authorization(params) {
    return (preAuthorization.bind(params));
}
exports.authorization = authorization;

//# sourceMappingURL=authorization.js.map
