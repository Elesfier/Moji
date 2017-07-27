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
var SimpleLoaderComponent = (function () {
    function SimpleLoaderComponent() {
        this.type = 'simple';
        this.isLoading = false;
    }
    SimpleLoaderComponent.prototype.start = function () {
        this.isLoading = true;
    };
    SimpleLoaderComponent.prototype.stop = function () {
        this.isLoading = false;
    };
    return SimpleLoaderComponent;
}());
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], SimpleLoaderComponent.prototype, "type", void 0);
SimpleLoaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-loader',
        styles: ["\n    .loading *:not(.simple-light-loader) {\n      opacity: 0.92;\n      filter: alpha(opacity=92);\n      pointer-events: none;\n      transition: opacity 0.3s, visibility 0.3s;\n      z-index: 1;\n    }\n\n    @keyframes light-spinner {\n      to { transform: rotate(360deg); }\n    }\n\n    .simple-light-loader:before {\n      z-index: 2000;\n      content: '';\n      box-sizing: border-box;\n      position: absolute;\n      top: 40%;\n      left: 50%;\n      width: 60px;\n      height: 60px;\n      margin-top: -15px;\n      margin-left: -30px;\n      border-radius: 50%;\n      border: 2px solid #ccc;\n      border-top-color: #006BC6;\n      animation: light-spinner .6s linear infinite;\n    }\n  "],
        template: "\n  <div [ngClass]=\"{ 'loading' : isLoading }\">\n    <ng-content></ng-content>\n    <simple-light-loader\n      class=\"simple-light-loader\"\n      [ngClass]=\"{\n        'show' : isLoading,\n        'hide' : !isLoading\n      }\">\n    </simple-light-loader>\n  </div>\n  "
    })
], SimpleLoaderComponent);
exports.SimpleLoaderComponent = SimpleLoaderComponent;

//# sourceMappingURL=loader.component.js.map
