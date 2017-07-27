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
var http_1 = require("@angular/http");
var local_storage_service_service_1 = require("./local-storage-service.service");
require("rxjs/add/operator/map");
var HttpService = (function () {
    function HttpService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.attachToken();
    }
    HttpService.prototype.attachToken = function () {
        if (this.localStorageService.get('JOME_TOKEN')) {
            var token = this.localStorageService.get('JOME_TOKEN');
            if (this.headers && this.headers.get('Authorization') === token)
                return;
            this.headers = new http_1.Headers();
            this.headers.append('Authorization', token);
        }
    };
    HttpService.prototype.createURLSearchParams = function (searchParams) {
        var search = null;
        if (searchParams) {
            search = new http_1.URLSearchParams();
            Object.keys(searchParams).forEach(function (key) {
                search.set(key, searchParams[key]);
            });
        }
        return search;
    };
    HttpService.prototype.post = function (url, body, attachToken) {
        if (body === void 0) { body = {}; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.post('/api' + url, body, {
            headers: (attachToken) ? (this.headers) : (undefined)
        }).map(function (response) {
            return response.json();
        });
    };
    HttpService.prototype.patch = function (url, body, attachToken) {
        if (body === void 0) { body = {}; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.patch('/api' + url, body, {
            headers: (attachToken) ? (this.headers) : (undefined)
        }).map(function (response) {
            return response.json();
        });
    };
    HttpService.prototype.put = function (url, body, attachToken) {
        if (body === void 0) { body = {}; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.put('/api' + url, body, {
            headers: (attachToken) ? (this.headers) : (undefined)
        }).map(function (response) {
            return response.json();
        });
    };
    HttpService.prototype.get = function (url, search, attachToken) {
        if (search === void 0) { search = undefined; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.get('/api' + url, {
            search: (search) ? (this.createURLSearchParams(search)) : (search),
            headers: (attachToken) ? (this.headers) : (undefined)
        }).map(function (response) {
            return response.json();
        });
    };
    HttpService.prototype.download = function (url, search, attachToken) {
        if (search === void 0) { search = undefined; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.get('/api' + url, {
            search: (search) ? (this.createURLSearchParams(search)) : (search),
            headers: (attachToken) ? (this.headers) : (undefined)
        });
    };
    HttpService.prototype.delete = function (url, search, attachToken) {
        if (search === void 0) { search = undefined; }
        if (attachToken === void 0) { attachToken = true; }
        if (attachToken)
            this.attachToken();
        return this.http.delete('/api' + url, {
            search: (search) ? (this.createURLSearchParams(search)) : (search),
            headers: (attachToken) ? (this.headers) : (undefined)
        }).map(function (response) {
            return response.json();
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        local_storage_service_service_1.LocalStorageService])
], HttpService);
exports.HttpService = HttpService;

//# sourceMappingURL=http.service.js.map
