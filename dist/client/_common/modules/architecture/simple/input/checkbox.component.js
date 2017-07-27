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
var SimpleCheckboxComponent = (function () {
    function SimpleCheckboxComponent(simpleFormComponent) {
        this.simpleFormComponent = simpleFormComponent;
        this.label = '';
        this.bindParent = undefined;
        this.bind = undefined;
        this.disabled = false;
        this.onChange = new core_1.EventEmitter();
    }
    SimpleCheckboxComponent.prototype.ngOnInit = function () {
        if (this.simpleFormComponent && !this.bindParent)
            this.bindParent = this.simpleFormComponent.bind;
    };
    SimpleCheckboxComponent.prototype.onChangeModel = function (value) {
        this.bindParent[this.bind] = value;
    };
    SimpleCheckboxComponent.prototype.onChangeCheckbox = function (value) {
        this.onChange.emit(value);
    };
    return SimpleCheckboxComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SimpleCheckboxComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('bind-parent'),
    __metadata("design:type", Object)
], SimpleCheckboxComponent.prototype, "bindParent", void 0);
__decorate([
    core_1.Input('bind'),
    __metadata("design:type", Object)
], SimpleCheckboxComponent.prototype, "bind", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Boolean)
], SimpleCheckboxComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output('on-change'),
    __metadata("design:type", Object)
], SimpleCheckboxComponent.prototype, "onChange", void 0);
SimpleCheckboxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-checkbox',
        template: "\n    <label\n      style=\"font-weight: normal !important;\"\n      class=\"form-check-label\">\n      <input\n        [(ngModel)]=\"bindParent[bind]\"\n        (ngModelChange)=\"onChangeModel($event)\"\n        [disabled]=\"disabled\"\n        (change)=\"onChangeCheckbox($event.currentTarget.checked)\"\n        type=\"checkbox\"\n        class=\"form-check-input\">\n      {{label}}\n    </label>\n  "
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return form_component_1.SimpleFormComponent; }))),
    __metadata("design:paramtypes", [form_component_1.SimpleFormComponent])
], SimpleCheckboxComponent);
exports.SimpleCheckboxComponent = SimpleCheckboxComponent;

//# sourceMappingURL=checkbox.component.js.map
