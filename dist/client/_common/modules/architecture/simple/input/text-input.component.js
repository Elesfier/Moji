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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_component_1 = require("./form.component");
var SimpleTextInputComponent = (function () {
    function SimpleTextInputComponent(simpleFormComponent) {
        this.simpleFormComponent = simpleFormComponent;
        this.placeholder = '';
        this.leftLabel = '';
        this.width = 100;
        this.rightButton = '';
        this.bindParent = undefined;
        this.bind = undefined;
        this.onClickButton = new core_1.EventEmitter();
        this.onEnter = new core_1.EventEmitter();
    }
    SimpleTextInputComponent.prototype.ngOnInit = function () {
        if (this.simpleFormComponent && !this.bindParent)
            this.bindParent = this.simpleFormComponent.bind;
    };
    SimpleTextInputComponent.prototype.onChangeModel = function (value) {
        this.bindParent[this.bind] = value;
    };
    SimpleTextInputComponent.prototype.onChangeTextInput = function (value) {
        this.onEnter.emit(value);
    };
    SimpleTextInputComponent.prototype.onClickButtonTextInput = function (value) {
        this.onClickButton.emit(value);
    };
    return SimpleTextInputComponent;
}());
__decorate([
    core_1.Input('placeholder'),
    __metadata("design:type", String)
], SimpleTextInputComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SimpleTextInputComponent.prototype, "leftLabel", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Number)
], SimpleTextInputComponent.prototype, "width", void 0);
__decorate([
    core_1.Input('button-label'),
    __metadata("design:type", String)
], SimpleTextInputComponent.prototype, "rightButton", void 0);
__decorate([
    core_1.Input('bind-parent'),
    __metadata("design:type", Object)
], SimpleTextInputComponent.prototype, "bindParent", void 0);
__decorate([
    core_1.Input('bind'),
    __metadata("design:type", Object)
], SimpleTextInputComponent.prototype, "bind", void 0);
__decorate([
    core_1.Output('on-click'),
    __metadata("design:type", Object)
], SimpleTextInputComponent.prototype, "onClickButton", void 0);
__decorate([
    core_1.Output('on-enter'),
    __metadata("design:type", Object)
], SimpleTextInputComponent.prototype, "onEnter", void 0);
SimpleTextInputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-text-input',
        template: "\n    <div\n      class=\"input-group\"\n      [ngStyle]=\"{ 'width' : width + '%' }\">\n      <span *ngIf=\"leftLabel\" class=\"input-group-addon\">{{leftLabel}}</span>\n      <input #textInputInner\n        (keyup.enter)='onChangeTextInput(textInputInner.value)'\n        type=\"text\"\n        class=\"form-control\"\n        [(ngModel)]=\"bindParent[bind]\"\n        (ngModelChange)=\"onChangeModel($event)\"\n        placeholder=\"{{placeholder}}\">\n      <span *ngIf=\"rightButton\" class=\"input-group-btn\">\n        <button\n          class=\"btn btn-default\"\n          (click)='onClickButtonTextInput(textInputInner.value)'\n          type=\"button\">\n          {{rightButton}}\n        </button>\n      </span>\n    </div>\n  "
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return form_component_1.SimpleFormComponent; }))),
    __metadata("design:paramtypes", [form_component_1.SimpleFormComponent])
], SimpleTextInputComponent);
exports.SimpleTextInputComponent = SimpleTextInputComponent;

//# sourceMappingURL=text-input.component.js.map
