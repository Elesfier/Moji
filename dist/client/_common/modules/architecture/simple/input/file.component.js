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
var SimpleFileComponent = (function () {
    function SimpleFileComponent(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.label = 'Browse';
        this.url = undefined;
        this.fieldname = '';
        this.look = 'default';
        this.widthFilename = 80;
        this.disabled = false;
        this.onFileChange = new core_1.EventEmitter();
        this.filesToUpload = [];
        this.filename = '';
    }
    SimpleFileComponent.prototype.onFileChangeInput = function (fileInput) {
        if (fileInput.target.files.length == 0)
            return;
        this.filesToUpload = fileInput.target.files;
        this.filename = this.filesToUpload[0].name;
        this.onFileChange.emit(fileInput.target.files);
    };
    SimpleFileComponent.prototype.isReady = function () {
        return (this.filesToUpload.length == 0);
    };
    SimpleFileComponent.prototype.upload = function (params) {
        if (params === void 0) { params = {}; }
        if (this.isReady())
            return;
        return this.fileUploadService.upload({
            url: params.url || this.url,
            files: this.filesToUpload,
            fieldname: params.fieldname || this.fieldname,
            params: params.params || {}
        });
    };
    return SimpleFileComponent;
}());
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], SimpleFileComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('url'),
    __metadata("design:type", String)
], SimpleFileComponent.prototype, "url", void 0);
__decorate([
    core_1.Input('fieldname'),
    __metadata("design:type", String)
], SimpleFileComponent.prototype, "fieldname", void 0);
__decorate([
    core_1.Input('look'),
    __metadata("design:type", String)
], SimpleFileComponent.prototype, "look", void 0);
__decorate([
    core_1.Input('width-name'),
    __metadata("design:type", Number)
], SimpleFileComponent.prototype, "widthFilename", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Boolean)
], SimpleFileComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Output('on-file-change'),
    __metadata("design:type", Object)
], SimpleFileComponent.prototype, "onFileChange", void 0);
SimpleFileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'simple-file',
        template: "\n    <label style=\"margin-right: 10px;\" [attr.class]=\"'btn btn-' + look + ' btn-file'\">\n      {{label}}\n      <input\n        (change)=\"onFileChangeInput($event)\"\n        [disabled]=\"disabled\"\n        type=\"file\"\n        style=\"display: none;\">\n    </label>\n    <div\n      [style.width.px]=\"widthFilename\"\n      style=\"vertical-align: middle; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">\n      {{filename}}\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [index_1.FileUploadService])
], SimpleFileComponent);
exports.SimpleFileComponent = SimpleFileComponent;

//# sourceMappingURL=file.component.js.map
