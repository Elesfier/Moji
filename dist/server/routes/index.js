"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../_common/index"));
__export(require("../_model/index"));
var index_1 = require("./archive/index");
var index_2 = require("./plugins/index");
exports.routes = []
    .concat(index_2.pluginsRoute)
    .concat(index_1.archiveRoute);

//# sourceMappingURL=index.js.map
