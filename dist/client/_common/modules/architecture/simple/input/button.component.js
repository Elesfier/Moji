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
var SimpleButtonComponent = (function () {
    function SimpleButtonComponent() {
        this.buttonLabel = 'Button';
        this.width = 100;
        this.buttonWidth = 100;
        this.disabled = false;
        this.buttonType = 'button';
        this.look = 'default';
        this.onClick = new core_1.EventEmitter();
    }
    SimpleButtonComponent.prototype.onClickButton = function () {
        this.onClick.emit(undefined);
    };
    return SimpleButtonComponent;
}());
__decorate([
    core_1.Input('button-label'),
    __metadata("design:type", String)
], SimpleButtonComponent.prototype, "buttonLabel", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Number)
], SimpleButtonComponent.prototype, "width", void 0);
__decorate([
    core_1.Input('button-width'),
    __metadata("design:type", Number)
], SimpleButtonComponent.prototype, "buttonWidth", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Boolean)
], SimpleButtonComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], SimpleButtonComponent.prototype, "buttonType", void 0);
__decorate([
    core_1.Input('look'),
    __metadata("design:type", String)
], SimpleButtonComponent.prototype, "look", void 0);
__decorate([
    core_1.Output('on-click'),
    __metadata("design:type", Object)
], SimpleButtonComponent.prototype, "onClick", void 0);
SimpleButtonComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-button',
        template: "\n    <div class=\"input-group\" [ngStyle]=\"{ 'width' : width + '%' }\">\n      <button\n        [attr.type]=\"buttonType\"\n        (click)='onClickButton()'\n        [disabled]=\"disabled\"\n        [ngStyle]=\"{ 'width' : buttonWidth + '%' }\"\n        [attr.class]=\"'btn btn-' + look\">\n        {{buttonLabel}}\n      </button>\n    </div>\n  "
    })
], SimpleButtonComponent);
exports.SimpleButtonComponent = SimpleButtonComponent;

//# sourceMappingURL=button.component.js.map
