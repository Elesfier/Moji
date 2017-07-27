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
var SimpleColumnSpaceComponent = (function () {
    function SimpleColumnSpaceComponent() {
        this.size = [0, 0, 0, 0, 0];
        this.padding = 0;
    }
    return SimpleColumnSpaceComponent;
}());
__decorate([
    core_1.Input('size'),
    __metadata("design:type", Array)
], SimpleColumnSpaceComponent.prototype, "size", void 0);
__decorate([
    core_1.Input('padding'),
    __metadata("design:type", Number)
], SimpleColumnSpaceComponent.prototype, "padding", void 0);
SimpleColumnSpaceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-column-space',
        template: "\n    <div\n      [style.padding.px]=\"padding\"\n      [attr.class]=\"'col-xs-'+size[0]+' col-sm-'+size[1]+' col-md-'+size[2]+' col-lg-'+size[3]+' col-xl-'+size[4]\">\n    </div>\n  "
    })
], SimpleColumnSpaceComponent);
exports.SimpleColumnSpaceComponent = SimpleColumnSpaceComponent;

//# sourceMappingURL=column-space.component.js.map
