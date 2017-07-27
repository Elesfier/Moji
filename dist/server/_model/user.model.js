"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    token: { type: String, required: true },
    profile: { type: mongoose_1.Schema.Types.ObjectId, ref: 'File', required: false },
    notifications: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Notification' }],
    setting: { type: mongoose_1.Schema.Types.Mixed, required: true }
});
exports.UserModel = mongoose_1.model('User', UserSchema);

//# sourceMappingURL=user.model.js.map
