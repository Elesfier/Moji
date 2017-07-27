"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var ListSchema = new mongoose_1.Schema({
    name: { type: String, required: false },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: false },
    list: [mongoose_1.Schema.Types.Mixed]
});
exports.ListModel = mongoose_1.model('List', ListSchema);

//# sourceMappingURL=list.model.js.map
