"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./site/index");
var CONTENT_PATH = 'moji';
var appRoutes = [
    { path: '', component: index_3.SiteComponent },
    { path: 'login', component: index_1.LoginComponent, canActivate: [index_1.LoginGuard] },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'site', component: index_3.SiteComponent },
    { path: CONTENT_PATH, loadChildren: '../_content/content.module#ContentModule' },
    { path: '**', redirectTo: 'site' }
];
exports.RootRouting = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=root.routing.js.map
