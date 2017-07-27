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
var index_1 = require("../../../../index");
var SimpleTextAreaComponent = (function () {
    function SimpleTextAreaComponent(element, simpleFormComponent) {
        this.element = element;
        this.simpleFormComponent = simpleFormComponent;
        this.placeholder = '';
        this.rows = 5;
        this.label = '';
        this.bindParent = undefined;
        this.canResize = false;
        this.bind = undefined;
    }
    SimpleTextAreaComponent.prototype.ngOnInit = function () {
        if (this.simpleFormComponent && !this.bindParent)
            this.bindParent = this.simpleFormComponent.bind;
        index_1.jQuery(this.element.nativeElement).delegate('textarea', 'keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 9) {
                e.preventDefault();
                var start = index_1.jQuery(this).get(0).selectionStart;
                var end = index_1.jQuery(this).get(0).selectionEnd;
                index_1.jQuery(this).val(index_1.jQuery(this).val().substring(0, start)
                    + "\t"
                    + index_1.jQuery(this).val().substring(end));
                index_1.jQuery(this).get(0).selectionStart =
                    index_1.jQuery(this).get(0).selectionEnd = start + 1;
            }
        });
    };
    SimpleTextAreaComponent.prototype.onChangeModel = function (value) {
        this.bindParent[this.bind] = value;
    };
    return SimpleTextAreaComponent;
}());
__decorate([
    core_1.Input('placeholder'),
    __metadata("design:type", String)
], SimpleTextAreaComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input('rows'),
    __metadata("design:type", Number)
], SimpleTextAreaComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SimpleTextAreaComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('bind-parent'),
    __metadata("design:type", Object)
], SimpleTextAreaComponent.prototype, "bindParent", void 0);
__decorate([
    core_1.Input('can-resize'),
    __metadata("design:type", Boolean)
], SimpleTextAreaComponent.prototype, "canResize", void 0);
__decorate([
    core_1.Input('bind'),
    __metadata("design:type", Object)
], SimpleTextAreaComponent.prototype, "bind", void 0);
SimpleTextAreaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-text-area',
        template: "\n    <div class=\"form-group\">\n      <span\n        *ngIf=\"label\"\n        class=\"input-group-addon\"\n        style=\"border: 1px solid #ccc; padding: 10px 12px; border-top-right-radius: 4px; border-bottom-left-radius: 0; border-bottom: 0;\">\n        {{label}}\n      </span>\n      <textarea\n        #textAreaInputInner\n        [attr.rows]=\"rows\"\n        [(ngModel)]=\"bindParent[bind]\"\n        (ngModelChange)=\"onChangeModel($event)\"\n        [attr.placeholder]=\"placeholder\"\n        [ngStyle]=\"{ 'resize' : (canResize)?('vertical'):('none'), 'border-top-left-radius': (label)?(0):(4), 'border-top-right-radius': (label)?(0):(4)  }\"\n        class=\"form-control\">\n      </textarea>\n    </div>\n  "
    }),
    __param(1, core_1.Inject(core_1.forwardRef(function () { return form_component_1.SimpleFormComponent; }))),
    __metadata("design:paramtypes", [core_1.ElementRef,
        form_component_1.SimpleFormComponent])
], SimpleTextAreaComponent);
exports.SimpleTextAreaComponent = SimpleTextAreaComponent;

//# sourceMappingURL=text-area.component.js.map
