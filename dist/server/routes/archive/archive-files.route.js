"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../index");
var path = require("path");
exports.archiveFiles = express_1.Router();
exports.archiveFiles.get('/archive/files/download/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    console.log(request.query);
    console.log(request.params.id);
    var file = __dirname + '/index.ts';
    console.log(path.basename(file));
    response.download(file, path.basename(file));
});
exports.archiveFiles.get('/archive/files/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    response.json({
        rows: [
            {
                data: { id: 'assaas' },
                columns: [
                    { content: 'Nazwa pliku1' }
                ]
            },
            {
                data: { id: 'assaas2' },
                columns: [
                    { content: 'Nazwa pliku2' }
                ]
            }
        ]
    });
});
exports.archiveFiles.delete('/archive/files/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    console.log(request.params.id);
    console.log(request.query);
    response.handler({ type: 'REMOVE_FILE_SUCCESS' });
});
exports.archiveFiles.post('/archive/files/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), index_1.fileUploader.array("archiveFiles", 12), function (request, response) {
    console.log(request.params.id);
    console.log(request.files);
    response.handler({ type: 'SUCCESS_ADDING_FILE' });
});

//# sourceMappingURL=archive-files.route.js.map
