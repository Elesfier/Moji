"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var NoteSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true, default: '' }
});
exports.NoteModel = mongoose_1.model('Note', NoteSchema);

//# sourceMappingURL=note.model.js.map
