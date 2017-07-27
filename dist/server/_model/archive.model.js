"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var ArchiveSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    hasFiles: { type: Boolean, required: true, default: false },
    hasList: { type: Boolean, required: true, default: false },
    isCheckList: { type: Boolean, required: true, default: false },
    isHidden: { type: Boolean, required: true, default: false },
    noteList: { type: mongoose_1.Schema.Types.ObjectId, ref: 'List', required: false },
    fileList: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'File' }]
});
ArchiveSchema.pre('remove', function (next) {
    _this.fileList.forEach(function (file) {
        _this.model('File').remove({ _id: file._id });
    });
    _this.model('List').remove({ _id: _this.noteList._id }, next);
});
exports.ArchiveModel = mongoose_1.model('Archive', ArchiveSchema);

//# sourceMappingURL=archive.model.js.map
