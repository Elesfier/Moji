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
var router_1 = require("@angular/router");
var index_1 = require("../../_common/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, httpService, alertService, localStorageService) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.alertService = alertService;
        this.localStorageService = localStorageService;
        this.model = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.httpService.post('/service/login', {
            login: this.model.username,
            password: this.model.password
        }).subscribe(function (data) {
            if (data.type) {
                _this.localStorageService.set('JOME_TOKEN', data.data.token);
                _this.router.navigate(['/moji']);
            }
            else {
                _this.alertService.warning('Wrong Username or Email or Password.');
            }
        }, function (error) {
            _this.alertService.error(error.message);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.HttpService,
        index_1.AlertService,
        index_1.LocalStorageService])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
