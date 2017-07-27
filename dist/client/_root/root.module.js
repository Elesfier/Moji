"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var root_component_1 = require("./root.component");
var root_routing_1 = require("./root.routing");
var index_1 = require("../_common/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./site/index");
var RootModule = (function () {
    function RootModule() {
    }
    return RootModule;
}());
RootModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            root_routing_1.RootRouting
        ],
        declarations: [
            root_component_1.RootComponent,
            index_1.AlertComponent,
            index_2.LoginComponent,
            index_3.RegisterComponent,
            index_4.SiteComponent
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            index_2.LoginGuard,
            index_1.AlertService,
            index_1.LocalStorageService,
            index_1.HttpService,
            http_2.BaseRequestOptions
        ],
        bootstrap: [root_component_1.RootComponent]
    })
], RootModule);
exports.RootModule = RootModule;

//# sourceMappingURL=root.module.js.map
