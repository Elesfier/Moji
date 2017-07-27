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
var index_1 = require("../../index");
var index_2 = require("../../index");
var CreateArchiveModalComponent = (function () {
    function CreateArchiveModalComponent(httpService) {
        this.httpService = httpService;
        this.model = {};
        this.afterAddArchive = new core_1.EventEmitter();
    }
    CreateArchiveModalComponent.prototype.saveArchive = function () {
        var _this = this;
        if (this.model['title'] == undefined)
            return;
        this.modal.$loader.start();
        this.httpService.put('/archive', this.model).subscribe(function (response) {
            _this.afterAddArchive.emit(undefined);
            _this.modal.close();
        }, function (error) {
            console.error(error);
        });
    };
    CreateArchiveModalComponent.prototype.resetData = function () {
        var _this = this;
        Object.keys(this.model).forEach(function (key) { delete _this.model[key]; });
    };
    return CreateArchiveModalComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", index_1.SimpleModalComponent)
], CreateArchiveModalComponent.prototype, "modal", void 0);
__decorate([
    core_1.Output('after-add-archive'),
    __metadata("design:type", Object)
], CreateArchiveModalComponent.prototype, "afterAddArchive", void 0);
CreateArchiveModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-archive-modal',
        templateUrl: 'create-archive-modal.component.html'
    }),
    __metadata("design:paramtypes", [index_2.HttpService])
], CreateArchiveModalComponent);
exports.CreateArchiveModalComponent = CreateArchiveModalComponent;

//# sourceMappingURL=create-archive-modal.component.js.map
