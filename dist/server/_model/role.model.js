"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var RoleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    hierarchy: { type: Number, required: true, default: 0 },
    permissions: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Permission' }]
});
exports.RoleModel = mongoose_1.model('Role', RoleSchema);

//# sourceMappingURL=role.model.js.map
