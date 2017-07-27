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
var index_1 = require("../../../../index");
var SimpleModalTabDirective = (function () {
    function SimpleModalTabDirective(element) {
        this.element = element;
        this.$tab = this.element.nativeElement;
        this.show();
    }
    SimpleModalTabDirective.prototype.show = function () {
        if (this.$tab.parentElement && this.$tab.parentElement.children[0] == this.$tab)
            this.$tab.setAttribute('class', 'show');
    };
    SimpleModalTabDirective.prototype.select = function ($tabHeader) {
        $tabHeader.parentElement.querySelector("[class='active']").setAttribute("class", "");
        this.$tab.parentElement.querySelector("[class='show']").setAttribute("class", "hide");
        $tabHeader.setAttribute("class", "active");
        this.$tab.setAttribute('class', 'show');
    };
    return SimpleModalTabDirective;
}());
__decorate([
    core_1.Input('name'),
    __metadata("design:type", String)
], SimpleModalTabDirective.prototype, "name", void 0);
SimpleModalTabDirective = __decorate([
    core_1.Directive({
        selector: 'simple-modal-tab',
        host: { 'class': 'hide' }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SimpleModalTabDirective);
exports.SimpleModalTabDirective = SimpleModalTabDirective;
var SimpleModalComponent = (function () {
    function SimpleModalComponent(element) {
        var _this = this;
        this.element = element;
        this.$modal = undefined;
        this.title = '';
        this.zIndex = 0;
        this.dataBackdrop = 'true';
        this.size = 'normal';
        this.addCloseIcon = true;
        this.addCloseButton = false;
        this.minHeight = 445;
        this.maxHeight = 585;
        this.showHeader = true;
        this.onStartLoad = false;
        this.onShow = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.passData = undefined;
        this.$modal = index_1.jQuery(element.nativeElement);
        this.$modal.on("shown.bs.modal", function () {
            if (_this.onStartLoad)
                _this.$loader.start();
            _this.onShow.emit(_this.passData);
        });
        this.$modal.on("hidden.bs.modal", function () {
            if (_this.$tabs._results.length != 0) {
                if (_this.$modal.find("[class='active']"))
                    _this.$modal.find("[class='active']").attr("class", "");
                if (_this.$modal.find("[class='show']"))
                    _this.$modal.find("[class='show']").attr("class", "hide");
                _this.$tabs._results[0].show();
                _this.$modal.find(".modal-header ul[class='nav nav-tabs'] li:first-child").attr("class", "active");
            }
            _this.$loader.stop();
            _this.onHide.emit(_this.passData);
        });
    }
    Object.defineProperty(SimpleModalComponent.prototype, "zIndexChanger", {
        get: function () {
            return 1050 + this.zIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleModalComponent.prototype, "dataBackdropChanger", {
        get: function () {
            return this.dataBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    SimpleModalComponent.prototype.show = function (passData) {
        if (passData === void 0) { passData = undefined; }
        this.passData = passData;
        this.$modal.modal('show');
    };
    SimpleModalComponent.prototype.close = function (passData) {
        if (passData === void 0) { passData = undefined; }
        this.passData = passData;
        this.$modal.modal('hide');
    };
    return SimpleModalComponent;
}());
__decorate([
    core_1.ContentChildren(SimpleModalTabDirective, { descendants: true }),
    __metadata("design:type", core_1.QueryList)
], SimpleModalComponent.prototype, "$tabs", void 0);
__decorate([
    core_1.ViewChild('modalLoader'),
    __metadata("design:type", index_1.SimpleLoaderComponent)
], SimpleModalComponent.prototype, "$loader", void 0);
__decorate([
    core_1.Input('title'),
    __metadata("design:type", String)
], SimpleModalComponent.prototype, "title", void 0);
__decorate([
    core_1.Input('z-index'),
    __metadata("design:type", Number)
], SimpleModalComponent.prototype, "zIndex", void 0);
__decorate([
    core_1.Input('data-backdrop'),
    __metadata("design:type", String)
], SimpleModalComponent.prototype, "dataBackdrop", void 0);
__decorate([
    core_1.Input('size'),
    __metadata("design:type", String)
], SimpleModalComponent.prototype, "size", void 0);
__decorate([
    core_1.Input('show-close-icon'),
    __metadata("design:type", Boolean)
], SimpleModalComponent.prototype, "addCloseIcon", void 0);
__decorate([
    core_1.Input('show-close-button'),
    __metadata("design:type", Boolean)
], SimpleModalComponent.prototype, "addCloseButton", void 0);
__decorate([
    core_1.Input('min-height'),
    __metadata("design:type", Number)
], SimpleModalComponent.prototype, "minHeight", void 0);
__decorate([
    core_1.Input('max-height'),
    __metadata("design:type", Number)
], SimpleModalComponent.prototype, "maxHeight", void 0);
__decorate([
    core_1.Input('show-header'),
    __metadata("design:type", Boolean)
], SimpleModalComponent.prototype, "showHeader", void 0);
__decorate([
    core_1.Input('on-start-load'),
    __metadata("design:type", Boolean)
], SimpleModalComponent.prototype, "onStartLoad", void 0);
__decorate([
    core_1.HostBinding('style.z-index'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], SimpleModalComponent.prototype, "zIndexChanger", null);
__decorate([
    core_1.HostBinding('attr.data-backdrop'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SimpleModalComponent.prototype, "dataBackdropChanger", null);
__decorate([
    core_1.Output('on-show'),
    __metadata("design:type", Object)
], SimpleModalComponent.prototype, "onShow", void 0);
__decorate([
    core_1.Output('on-hide'),
    __metadata("design:type", Object)
], SimpleModalComponent.prototype, "onHide", void 0);
SimpleModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-modal',
        templateUrl: 'modal.component.html',
        styleUrls: ['modal.component.css'],
        host: {
            'class': 'modal fade',
            'role': 'dialog',
            'tabindex': '-1'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SimpleModalComponent);
exports.SimpleModalComponent = SimpleModalComponent;

//# sourceMappingURL=modal.component.js.map
