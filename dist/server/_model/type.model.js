"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var TypeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
    look: { type: mongoose_1.Schema.Types.Mixed, required: true, default: {} },
    project: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Project', required: true }
});
exports.TypeModel = mongoose_1.model('Type', TypeSchema);

//# sourceMappingURL=type.model.js.map
