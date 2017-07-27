"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_common/index");
var SiteComponent = (function () {
    function SiteComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SiteComponent.prototype.ngAfterViewInit = function () {
        index_1.jQuery('.project-content a[rel=popover]').popover({
            html: true,
            trigger: 'hover',
            placement: 'top',
            container: 'body',
            content: function () { return '<img style="width: 100% !important;" src="' + $(this).data('img') + '" />'; }
        });
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'site.component.html',
        styleUrls: ['site.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], SiteComponent);
exports.SiteComponent = SiteComponent;

//# sourceMappingURL=site.component.js.map
