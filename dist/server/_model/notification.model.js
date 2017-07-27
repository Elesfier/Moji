"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var NotificationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    data: { type: mongoose_1.Schema.Types.Mixed, required: false }
});
exports.NotificationModel = mongoose_1.model('Notification', NotificationSchema);

//# sourceMappingURL=notification.model.js.map
