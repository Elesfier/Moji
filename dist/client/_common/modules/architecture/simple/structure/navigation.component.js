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
var SimpleNavigationComponent = (function () {
    function SimpleNavigationComponent(element) {
        this.element = element;
        this.brand = '';
        this.baseLink = '';
        this.routes = [];
        this.linkLastButton = [];
        this.labelLastButton = 'Logout';
        this.onClickLastButtonNavigation = new core_1.EventEmitter();
    }
    SimpleNavigationComponent.prototype.cutRecurringPaths = function (routes) {
        var newRoutes = [];
        routes.forEach(function (route) {
            if (newRoutes.length == 0 || route.path != newRoutes[newRoutes.length - 1].path)
                newRoutes.push(route);
        });
        return newRoutes;
    };
    SimpleNavigationComponent.prototype.navigate = function (linkRouter) {
        try {
            this.element.nativeElement.querySelector("a[linkRouter=\'" + linkRouter + "\']").click();
        }
        catch (err) {
            console.error(err);
        }
    };
    SimpleNavigationComponent.prototype.onClickLastButton = function () {
        this.onClickLastButtonNavigation.emit(undefined);
    };
    return SimpleNavigationComponent;
}());
__decorate([
    core_1.Input('brand'),
    __metadata("design:type", String)
], SimpleNavigationComponent.prototype, "brand", void 0);
__decorate([
    core_1.Input('base-link'),
    __metadata("design:type", String)
], SimpleNavigationComponent.prototype, "baseLink", void 0);
__decorate([
    core_1.Input('routes'),
    __metadata("design:type", Array)
], SimpleNavigationComponent.prototype, "routes", void 0);
__decorate([
    core_1.Input('link-last-button'),
    __metadata("design:type", Array)
], SimpleNavigationComponent.prototype, "linkLastButton", void 0);
__decorate([
    core_1.Input('label-last-button'),
    __metadata("design:type", String)
], SimpleNavigationComponent.prototype, "labelLastButton", void 0);
__decorate([
    core_1.Output('on-click-last-button'),
    __metadata("design:type", Object)
], SimpleNavigationComponent.prototype, "onClickLastButtonNavigation", void 0);
SimpleNavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-navigation',
        styles: ["\n    .navbar {\n      margin-top: 20px;\n      -webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1) !important;\n      box-shadow: inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1) !important;\n      background-image: -webkit-linear-gradient(top,#e8e8e8 0,#f5f5f5 100%) !important;\n      background-image: -webkit-gradient(linear,left top,left bottom,from(#e8e8e8),to(#f5f5f5)) !important;\n      background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%) !important;\n      border: 1px solid #e3e3e3 !important;\n      border-radius: 2px;\n      background-color: #f5f5f5 !important;\n      background-repeat: repeat-x !important;\n    }\n\n    .navbar-default { border-width: 0; box-shadow: none; }\n\n    .navbar .container {\n      border-width: 0;\n      box-shadow: none;\n    }\n\n    .navbar .container .navbat-header {\n      border-width: 0;\n      box-shadow: none;\n    }\n\n    .navbar-brand { position: relative; z-index: 2; }\n\n    .navbar-nav.navbar-right .btn { position: relative; z-index: 2; padding: 4px 20px; margin: 10px auto; }\n\n    .navbar .navbar-collapse { position: relative; }\n    .navbar .navbar-collapse .navbar-right > li { padding-right: 9px; }\n    .navbar .navbar-collapse .navbar-right > li:last-child { padding-right: 27px; }\n\n    .navbar li>a:hover,li>a:focus,li>a:active\n    {\n      background-position: 0 -31px;\n    }\n\n    .navbar .nav-collapse { position: absolute; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding-right: 120px; padding-left: 80px; width: 100%; }\n    .navbar.navbar-default .nav-collapse { background-color: #f8f8f8; }\n    .navbar.navbar-inverse .nav-collapse { background-color: #222; }\n    .navbar .nav-collapse .navbar-form { border-width: 0; box-shadow: none; }\n    .nav-collapse>li { float: right; }\n\n    @media screen and (max-width: 767px) {\n        .navbar .navbar-collapse .navbar-right > li { padding-left: 15px; padding-right: 15px; }\n        .navbar .navbar-collapse .navbar-right > li:last-child { padding-right: 15px; }\n\n        .navbar .nav-collapse { margin: 7.5px auto; padding: 0; }\n        .navbar .nav-collapse .navbar-form { margin: 0; }\n        .nav-collapse>li { float: none; }\n    }\n  "],
        template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n\n        <div class=\"navbar-header\">\n          <button\n            type=\"button\"\n            class=\"navbar-toggle collapsed\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <span class=\"navbar-brand\" href=\"javascript:;\">{{brand}}</span>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngFor=\"let route of cutRecurringPaths(routes);\">\n              <a\n                role=\"button\"\n                [routerLink]=\"[ (route.addWithoutBase)?(''):(baseLink + '/') + route.path ]\"\n                class=\"btn btn-default\"\n                [attr.linkRouter]=\"route.path\">\n                {{route.path.charAt(0).toUpperCase() + route.path.slice(1)}}\n              </a>\n            </li>\n            <li>\n              <a\n                role=\"button\"\n                (click)=\"onClickLastButton($event)\"\n                [routerLink]=\"linkLastButton\"\n                class=\"btn btn-default\">\n                {{labelLastButton}}\n              </a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </nav>\n  "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SimpleNavigationComponent);
exports.SimpleNavigationComponent = SimpleNavigationComponent;

//# sourceMappingURL=navigation.component.js.map
