"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var index_1 = require("./_service/index");
var index_2 = require("./routes/index");
var config = require('../../Moji.config')();
var mongoURL = process.env.MOJI_MONGO_URL
    || config.mongoURL
    || config.test_mongoURL;
exports.API = express();
exports.Server = http.createServer(exports.API);
exports.API.use(bodyParser.urlencoded({ extended: true }));
exports.API.use(bodyParser.json({ limit: '50mb' }));
exports.API.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
exports.API.use(morgan("dev"));
exports.API.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});
exports.API.use(function (request, response, next) {
    response.handler = function (params) {
        return this.status((params.DBError || params.error) ? (400) : (params.status || 200)).json({
            type: params.type,
            message: ((params.DBError && params.error) ?
                ('DB_Error: ' + params.error.name + ': ' + params.error.message + '.') :
                (params.message)),
            data: params.data
        });
    };
    next();
});
index_1.services.forEach(function (service) {
    exports.API.use('/api/service', service);
});
index_2.routes.forEach(function (module) {
    exports.API.use('/api', module);
});
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);
exports.Database = mongoose.connection;
exports.Database.on('error', console.error.bind(console, 'connection error:'));

//# sourceMappingURL=server.js.map
