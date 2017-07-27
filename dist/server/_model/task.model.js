"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var index_1 = require("../_common/index");
;
var TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, default: '' },
    start: { type: Date, required: false },
    end: { type: Date, required: false },
    achieve: { type: Number, required: true, default: 0, min: 0, max: 100 },
    project: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Project', required: true },
    type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Type' }],
    member: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Member' }],
    priority: { type: String, enum: index_1.Priority, required: true },
    status: { type: String, enum: index_1.Status, required: true },
    difficult: { type: String, enum: index_1.Difficult, required: true },
    comments: { type: String, required: true },
    deleted: { type: Boolean, required: true, default: false },
    history: [{ date: Date, content: String }]
});
exports.TaskModel = mongoose_1.model('Task', TaskSchema);

//# sourceMappingURL=task.model.js.map
