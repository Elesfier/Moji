"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./index");
var index_2 = require("./index");
var contentRoutes = [
    {
        path: '',
        component: index_1.ContentComponent,
        canActivate: [index_1.ContentGuard],
        children: index_2.modules.routes
    },
    { path: '**', redirectTo: '' },
];
exports.ContentRouting = router_1.RouterModule.forChild(contentRoutes);

//# sourceMappingURL=content.routing.js.map
