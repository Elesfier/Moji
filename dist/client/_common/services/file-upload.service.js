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
var Observable_1 = require("rxjs/Observable");
var local_storage_service_service_1 = require("./local-storage-service.service");
var FileUploadService = (function () {
    function FileUploadService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    FileUploadService.prototype.upload = function (params) {
        params.fieldname = params.fieldname || 'uploads';
        if (!(params.files.length) || !(params.url))
            return;
        return this.makeFileRequest('/api' + params.url, params.params, params.files, params.fieldname);
    };
    FileUploadService.prototype.makeFileRequest = function (url, params, files, fieldname) {
        var _this = this;
        if (!this.localStorageService.get('JOME_TOKEN'))
            return;
        return Observable_1.Observable.create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(fieldname, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', _this.localStorageService.get('JOME_TOKEN'));
            xhr.send(formData);
        });
    };
    return FileUploadService;
}());
FileUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [local_storage_service_service_1.LocalStorageService])
], FileUploadService);
exports.FileUploadService = FileUploadService;

//# sourceMappingURL=file-upload.service.js.map
