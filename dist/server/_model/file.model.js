"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var FileSchema = new mongoose_1.Schema({
    info: { type: mongoose_1.Schema.Types.Mixed, required: true },
    data: { type: Buffer, required: true }
});
exports.FileModel = mongoose_1.model('File', FileSchema);

//# sourceMappingURL=file.model.js.map
