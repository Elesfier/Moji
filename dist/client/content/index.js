"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("../_common/index"));
var archive_component_1 = require("./archive/archive.component");
var details_archive_modal_component_1 = require("./archive/details/details-archive-modal.component");
var create_archive_modal_component_1 = require("./archive/create/create-archive-modal.component");
var plugins_component_1 = require("./plugins/plugins.component");
exports.ContentRoutes = [
    {
        path: 'archive',
        component: archive_component_1.ArchiveComponent
    },
    {
        path: 'archive',
        component: details_archive_modal_component_1.DetailsArchiveModalComponent
    },
    {
        path: 'archive',
        component: create_archive_modal_component_1.CreateArchiveModalComponent
    },
    {
        path: 'plugins',
        component: plugins_component_1.PluginsComponent
    }
];

//# sourceMappingURL=index.js.map
