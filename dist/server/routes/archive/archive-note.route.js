"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../index");
exports.archiveNote = express_1.Router();
exports.archiveNote.get('/archive/note/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    index_1.ArchiveModel
        .findOne({
        user: request['_currentUser']._id,
        _id: request.params.id
    })
        .populate('noteList')
        .exec(function (error, archive) {
        response.json({ rows: archive.noteList.list });
    });
});

//# sourceMappingURL=archive-note.route.js.map
