"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var MemberSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    role: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Role' }]
});
exports.MemberModel = mongoose_1.model('Member', MemberSchema);

//# sourceMappingURL=member.model.js.map
