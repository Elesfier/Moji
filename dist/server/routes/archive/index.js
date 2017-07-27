"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var archive_route_1 = require("./archive.route");
var archive_note_route_1 = require("./archive-note.route");
var archive_files_route_1 = require("./archive-files.route");
var archive_extensions_route_1 = require("./archive-extensions.route");
exports.archiveRoute = [];
exports.archiveRoute.push(archive_extensions_route_1.archiveExtensions);
exports.archiveRoute.push(archive_files_route_1.archiveFiles);
exports.archiveRoute.push(archive_note_route_1.archiveNote);
exports.archiveRoute.push(archive_route_1.archive);

//# sourceMappingURL=index.js.map
