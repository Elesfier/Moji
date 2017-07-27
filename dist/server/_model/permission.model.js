"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var index_1 = require("../_common/index");
;
var PermissionSchema = new mongoose_1.Schema({
    type: { type: String, enum: index_1.Permissions, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true }
});
exports.PermissionModel = mongoose_1.model('Permission', PermissionSchema);

//# sourceMappingURL=permission.model.js.map
