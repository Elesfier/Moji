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
var SimpleColumnComponent = (function () {
    function SimpleColumnComponent() {
        this.size = [0, 0, 0, 0, 0];
        this.break = [0, 0, 0, 0, 0];
        this.padding = [undefined, undefined];
    }
    return SimpleColumnComponent;
}());
__decorate([
    core_1.Input('size'),
    __metadata("design:type", Array)
], SimpleColumnComponent.prototype, "size", void 0);
__decorate([
    core_1.Input('break'),
    __metadata("design:type", Array)
], SimpleColumnComponent.prototype, "break", void 0);
__decorate([
    core_1.Input('padding'),
    __metadata("design:type", Array)
], SimpleColumnComponent.prototype, "padding", void 0);
SimpleColumnComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-column',
        styles: ["\n    @media screen and (max-width: 768px) {\n      .custom-break-column-xs {\n          padding-top: 9px !important;\n      }\n    }\n    @media screen and (min-width: 768px) and (max-width: 992px) {\n      .custom-break-column-sm {\n          padding-top: 9px !important;\n      }\n    }\n    @media screen and (min-width: 992px) and (max-width: 1170px) {\n      .custom-break-column-md {\n          padding-top: 9px !important;\n      }\n    }\n    @media screen and (min-width: 1170px) {\n      .custom-break-column-lg {\n          padding-top: 9px !important;\n      }\n    }\n  "],
        template: "\n    <div\n      [style.padding-left.px]=\"padding[0]\"\n      [style.padding-right.px]=\"padding[1]\"\n      [attr.class]=\"'col col-xs-'+size[0]+' col-sm-'+size[1]+' col-md-'+size[2]+' col-lg-'+size[3]+' col-xl-'+size[4]\">\n      <div [ngClass]=\"{ 'custom-break-column-xs' : break[0], 'custom-break-column-sm' : break[1], 'custom-break-column-md' : break[2], 'custom-break-column-lg' : break[3] }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  "
    })
], SimpleColumnComponent);
exports.SimpleColumnComponent = SimpleColumnComponent;

//# sourceMappingURL=column.component.js.map
