"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../index");
exports.archiveExtensions = express_1.Router();
exports.archiveExtensions.get('/archive/extensions', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    var responseArchives = [];
    index_1.ArchiveModel
        .find({ user: request['_currentUser']._id })
        .exec(function (error, archives) {
        if (error)
            return response.handler({ DBError: true, error: error });
        archives.forEach(function (archive) {
            if (archive.hasList)
                responseArchives.push({ name: archive.title, value: archive._id });
        });
        response.json(responseArchives);
    });
});
exports.archiveExtensions.post('/archive/extensions/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    index_1.ArchiveModel
        .findOne({
        user: request['_currentUser']._id,
        _id: request.params.id
    })
        .exec(function (error, archive) {
        if (error)
            return response.handler({ DBError: true, error: error });
        index_1.ListModel
            .findOne({ _id: archive.noteList })
            .exec(function (error, list) {
            if (error)
                return response.handler({ DBError: true, error: error });
            if (archive.hasList) {
                if (archive.isCheckList)
                    list.list.push({
                        data: { note: '', index: list.list.length },
                        columns: [
                            { content: false, type: 'checkbox' },
                            { content: request.body.title },
                            { content: request.body.link, type: 'link' }
                        ]
                    });
                else
                    list.list.push({
                        data: { note: '', index: list.list.length },
                        columns: [
                            { content: String(list.list.length + 1), type: 'center' },
                            { content: request.body.title },
                            { content: request.body.link, type: 'link' }
                        ]
                    });
            }
            list.save(function (error) {
                if (error)
                    return response.handler({ DBError: true, error: error });
                response.handler({ type: 'NOTE_ADDED' });
            });
        });
    });
});

//# sourceMappingURL=archive-extensions.route.js.map
