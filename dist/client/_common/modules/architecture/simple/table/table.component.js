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
var SimpleTableComponent = (function () {
    function SimpleTableComponent(httpService) {
        this.httpService = httpService;
        this.url = undefined;
        this.events = {};
        this.minHeight = 420;
        this.maxHeight = 570;
        this.header = undefined;
        this.additionals = {};
        this.showHeader = true;
        this.bind = undefined;
        this.bindKey = undefined;
        this.afterViewInit = new core_1.EventEmitter();
        this.afterViewChecked = new core_1.EventEmitter();
        this.model = null;
    }
    SimpleTableComponent.prototype.addExtraColumns = function (columns) {
        var _this = this;
        var newColumns = [].concat(columns);
        Object.keys(this.additionals).forEach(function (key) {
            newColumns.splice(Number(key), 0, _this.additionals[key]);
        });
        return newColumns;
    };
    SimpleTableComponent.prototype.fetch = function (searchParams) {
        var _this = this;
        if (searchParams === void 0) { searchParams = {}; }
        this.$loader.start();
        this.httpService.get(this.url, searchParams).subscribe(function (model) {
            if (_this.header && !model.header)
                model.header = _this.header;
            _this.model = model;
            if (_this.bind && _this.bindKey)
                _this.bind[_this.bindKey] = _this.model;
            _this.$loader.stop();
        });
    };
    SimpleTableComponent.prototype.ngAfterViewInit = function () {
        this.afterViewInit.emit(undefined);
    };
    SimpleTableComponent.prototype.ngAfterViewChecked = function () {
        this.afterViewChecked.emit(undefined);
    };
    return SimpleTableComponent;
}());
__decorate([
    core_1.ViewChild('tableLoader'),
    __metadata("design:type", index_1.SimpleLoaderComponent)
], SimpleTableComponent.prototype, "$loader", void 0);
__decorate([
    core_1.Input('url'),
    __metadata("design:type", String)
], SimpleTableComponent.prototype, "url", void 0);
__decorate([
    core_1.Input('events'),
    __metadata("design:type", Object)
], SimpleTableComponent.prototype, "events", void 0);
__decorate([
    core_1.Input('min-height'),
    __metadata("design:type", Number)
], SimpleTableComponent.prototype, "minHeight", void 0);
__decorate([
    core_1.Input('max-height'),
    __metadata("design:type", Number)
], SimpleTableComponent.prototype, "maxHeight", void 0);
__decorate([
    core_1.Input('header'),
    __metadata("design:type", Array)
], SimpleTableComponent.prototype, "header", void 0);
__decorate([
    core_1.Input('additionals'),
    __metadata("design:type", Object)
], SimpleTableComponent.prototype, "additionals", void 0);
__decorate([
    core_1.Input('show-header'),
    __metadata("design:type", Boolean)
], SimpleTableComponent.prototype, "showHeader", void 0);
__decorate([
    core_1.Input('bind'),
    __metadata("design:type", Object)
], SimpleTableComponent.prototype, "bind", void 0);
__decorate([
    core_1.Input('bind-key'),
    __metadata("design:type", String)
], SimpleTableComponent.prototype, "bindKey", void 0);
__decorate([
    core_1.Output('after-view-init'),
    __metadata("design:type", Object)
], SimpleTableComponent.prototype, "afterViewInit", void 0);
__decorate([
    core_1.Output('after-view-checked'),
    __metadata("design:type", Object)
], SimpleTableComponent.prototype, "afterViewChecked", void 0);
SimpleTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-table',
        templateUrl: 'table.component.html',
        styleUrls: ['table.component.css']
    }),
    __metadata("design:paramtypes", [index_1.HttpService])
], SimpleTableComponent);
exports.SimpleTableComponent = SimpleTableComponent;

//# sourceMappingURL=table.component.js.map
