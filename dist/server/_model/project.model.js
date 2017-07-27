"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, default: '' },
    start: { type: Date, required: false },
    end: { type: Date, required: false },
    counter: { type: Number, required: true, default: 0, min: 0 },
    close: { type: Boolean, required: true, default: false },
    members: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Member' }],
    types: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Type' }],
    setting: { type: mongoose_1.Schema.Types.Mixed, required: true }
});
exports.ProjectModel = mongoose_1.model('Project', ProjectSchema);

//# sourceMappingURL=project.model.js.map
