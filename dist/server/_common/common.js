"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require("multer");
exports.MAX_FILE_SIZE_UPLOAD = 1976563;
exports.fileUploader = multer({
    dest: 'dist/uploads/',
    limits: { fileSize: exports.MAX_FILE_SIZE_UPLOAD }
});
function generateRandomString() {
    return Math.random().toString(36).substring(7);
}
exports.generateRandomString = generateRandomString;

//# sourceMappingURL=common.js.map
