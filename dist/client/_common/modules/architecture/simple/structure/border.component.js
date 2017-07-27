"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleBorderComponent = (function () {
    function SimpleBorderComponent() {
    }
    return SimpleBorderComponent;
}());
SimpleBorderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-border',
        template: "\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n    <div class='well well-sm clearfix' style='border-radius: 2px;'>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  "
    })
], SimpleBorderComponent);
exports.SimpleBorderComponent = SimpleBorderComponent;

//# sourceMappingURL=border.component.js.map
