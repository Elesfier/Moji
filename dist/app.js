"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var server_1 = require("./server/server");
var config = require('../Moji.config')();
var ip = process.env.MOJI_IP
    || config.ip
    || config.test_ip;
var port = process.env.MOJI_PORT
    || config.port
    || config.test_port;
server_1.API.use(express.static(path.join(__dirname, 'client')));
server_1.API.use(function (request, response) {
    response.sendFile(path.join(__dirname, 'client/index.html'));
});
server_1.Database.once('open', function RUN_SERVER() { server_1.Server.listen(port, ip); });

//# sourceMappingURL=app.js.map
