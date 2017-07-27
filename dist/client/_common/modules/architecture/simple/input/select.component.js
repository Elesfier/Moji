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
var SimpleSelectComponent = (function () {
    function SimpleSelectComponent(simpleFormComponent) {
        this.simpleFormComponent = simpleFormComponent;
        this.selectData = undefined;
        this.leftLabel = '';
        this.width = 100;
        this.rightButton = '';
        this.bindParent = undefined;
        this.bind = undefined;
        this.onClickButton = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
    }
    SimpleSelectComponent.prototype.ngOnInit = function () {
        if (this.simpleFormComponent && !this.bindParent)
            this.bindParent = this.simpleFormComponent.bind;
    };
    SimpleSelectComponent.prototype.onChangeModel = function (value) {
        this.bindParent[this.bind] = value;
    };
    SimpleSelectComponent.prototype.onChangeSelect = function (target) {
        this.onChange.emit(target);
    };
    SimpleSelectComponent.prototype.onClickButtonSelect = function (target) {
        this.onClickButton.emit(target);
    };
    return SimpleSelectComponent;
}());
__decorate([
    core_1.Input('bind-select-data'),
    __metadata("design:type", String)
], SimpleSelectComponent.prototype, "selectData", void 0);
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SimpleSelectComponent.prototype, "leftLabel", void 0);
__decorate([
    core_1.Input('width'),
    __metadata("design:type", Number)
], SimpleSelectComponent.prototype, "width", void 0);
__decorate([
    core_1.Input('button-label'),
    __metadata("design:type", String)
], SimpleSelectComponent.prototype, "rightButton", void 0);
__decorate([
    core_1.Input('bind-parent'),
    __metadata("design:type", Object)
], SimpleSelectComponent.prototype, "bindParent", void 0);
__decorate([
    core_1.Input('bind'),
    __metadata("design:type", Object)
], SimpleSelectComponent.prototype, "bind", void 0);
__decorate([
    core_1.Output('on-click'),
    __metadata("design:type", Object)
], SimpleSelectComponent.prototype, "onClickButton", void 0);
__decorate([
    core_1.Output('on-change'),
    __metadata("design:type", Object)
], SimpleSelectComponent.prototype, "onChange", void 0);
SimpleSelectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-select',
        template: "\n    <div class=\"input-group\" [ngStyle]=\"{ 'width' : width + '%' }\">\n      <span *ngIf=\"leftLabel\" class=\"input-group-addon\">{{leftLabel}}</span>\n      <select\n        (change)=\"onChangeSelect($event.currentTarget)\"\n        [disabled]=\"(bindParent[selectData] == null || (bindParent[selectData] && (bindParent[selectData].length == 0)))\"\n        [(ngModel)]=\"bindParent[bind]\"\n        (ngModelChange)=\"onChangeModel($event)\"\n        class=\"input-large form-control\">\n        <option\n          *ngFor=\"let selectItem of bindParent[selectData];\"\n          [attr.value]=\"selectItem.value\"\n          [innerHTML]=\"selectItem.name\">\n        </option>\n      </select>\n      <span *ngIf=\"rightButton\" class=\"input-group-btn\">\n        <button\n          class=\"btn btn-default\"\n          (click)='onClickButtonSelect($event.currentTarget)'\n          type=\"button\">\n          {{rightButton}}\n        </button>\n      </span>\n    </div>\n  "
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return form_component_1.SimpleFormComponent; }))),
    __metadata("design:paramtypes", [form_component_1.SimpleFormComponent])
], SimpleSelectComponent);
exports.SimpleSelectComponent = SimpleSelectComponent;

//# sourceMappingURL=select.component.js.map
