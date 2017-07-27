"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../index");
exports.archive = express_1.Router();
exports.archive.get('/archive', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    var responseArchives = { rows: [] };
    index_1.ArchiveModel
        .find({ user: request['_currentUser']._id })
        .populate('noteList')
        .populate('fileList')
        .exec(function (error, archives) {
        if (error)
            return response.handler({ DBError: true, error: error });
        archives.forEach(function (archive) {
            if (!((request.query.showHidden === 'true') || !archive.isHidden))
                return;
            if (request.query.search && (archive.title.toLowerCase().indexOf(request.query.search.toLowerCase()) == -1))
                return;
            responseArchives.rows.push({
                data: { id: archive._id },
                columns: [
                    { content: archive.title },
                    {
                        content: (archive.hasFiles) ? String(archive.fileList.length) : ('-'),
                        type: 'center'
                    },
                    {
                        content: (archive.hasList) ? (function () {
                            if (!archive.isCheckList)
                                return String(archive.noteList.list.length);
                            var count = 0;
                            archive.noteList.list.forEach(function (item) {
                                if (!item.columns[0].content)
                                    count++;
                            });
                            return String(count);
                        }()) : ('-'),
                        type: 'center'
                    }
                ]
            });
        });
        response.json(responseArchives);
    });
});
exports.archive.put('/archive', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    var newList = new index_1.ListModel({
        list: []
    });
    newList.save();
    index_1.ArchiveModel.create({
        user: request['_currentUser']._id,
        title: request.body.title || 'none',
        description: request.body.description || '',
        hasFiles: request.body.hasFiles || false,
        hasList: request.body.hasList || false,
        isCheckList: request.body.isCheckList || false,
        isHidden: request.body.isHidden || false,
        noteList: newList._id
    }, function (error) {
        if (error)
            return response.handler({ DBError: true, error: error });
        response.handler({ type: 'ARCHIVE_IS_ADDED' });
    });
});
exports.archive.delete('/archive/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    index_1.ArchiveModel.findOneAndRemove({
        _id: request.params.id,
        user: request['_currentUser']._id
    }).exec(function (error) {
        if (error)
            return response.handler({ DBError: true, error: error });
        response.handler({ type: 'ARCHIVE_IS_REMOVE' });
    });
});
exports.archive.get('/archive/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    index_1.ArchiveModel.findOne({
        _id: request.params.id,
        user: request['_currentUser']._id
    }, function (error, archives) {
        if (error)
            return response.handler({ DBError: true, error: error });
        response.json({
            title: archives.title,
            description: archives.description,
            hasList: archives.hasList,
            hasFiles: archives.hasFiles,
            isCheckList: archives.isCheckList,
            isHidden: archives.isHidden
        });
    });
});
exports.archive.patch('/archive/:id', index_1.authorization({
    global: { mustBeLogged: true }
}), function (request, response) {
    index_1.ArchiveModel.findOne({
        _id: request.params.id,
        user: request['_currentUser']._id
    })
        .exec(function (error, archive) {
        if (error)
            return response.handler({ DBError: true, error: error });
        archive.title = request.body.title;
        archive.description = request.body.description;
        archive.hasFiles = request.body.newHasFiles;
        archive.hasList = request.body.newHasList;
        archive.isCheckList = request.body.newIsCheckList;
        archive.isHidden = request.body.isHidden;
        archive.save(function (error) {
            if (error)
                return response.handler({ DBError: true, error: error });
            index_1.ListModel.findOne({ _id: archive.noteList })
                .exec(function (error, list) {
                if (error)
                    return response.handler({ DBError: true, error: error });
                if (request.body.hasList && (request.body.isCheckList !== request.body.newIsCheckList)) {
                    request.body.notes.rows.forEach(function (item, index, noteList) {
                        if (request.body.newIsCheckList)
                            noteList[index].columns[0] = { content: false, type: 'checkbox' };
                        else
                            noteList[index].columns[0] = { content: String(index + 1), type: 'center' };
                    });
                }
                list.list = request.body.notes.rows;
                list.save(function (error) {
                    if (error)
                        return response.handler({ DBError: true, error: error });
                    response.handler({ type: 'ARCHIVE_PATCH_DONE' });
                });
            });
        });
    });
});

//# sourceMappingURL=archive.route.js.map
