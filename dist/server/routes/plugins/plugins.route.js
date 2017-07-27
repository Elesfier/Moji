"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../../_common/index");
var path = require("path");
var AdmZip = require("adm-zip");
var fs = require("fs");
exports.plugins = express_1.Router();
var regexHost = /<<<O>>>HOST<<<O>>>/g;
exports.plugins.get('/plugins/chrome', index_1.authorization({
    global: { mustBeLogged: false }
}), function (request, response) {
    var icon = __dirname + '/chrome-extension/icon.png';
    var index = __dirname + '/chrome-extension/index.html';
    var manifest = __dirname + '/chrome-extension/manifest.json';
    var main = __dirname + '/chrome-extension/main.js';
    var plugin = __dirname + '/chrome-extension/moji-extension-chrome.zip';
    fs.readFile(main, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(regexHost, request.headers.host);
        fs.writeFile(main, result, 'utf8', function (err) {
            if (err)
                return console.log(err);
            var zip = new AdmZip();
            zip.addLocalFile(manifest);
            zip.addLocalFile(main);
            zip.addLocalFile(index);
            zip.addLocalFile(icon);
            zip.writeZip(plugin);
            response.download(plugin, path.basename(plugin), function (err) {
                if (!err) {
                    fs.unlinkSync(plugin);
                }
            });
        });
    });
});

//# sourceMappingURL=plugins.route.js.map
