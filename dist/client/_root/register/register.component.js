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
var RegisterComponent = (function () {
    function RegisterComponent(router, alertService, httpService) {
        this.router = router;
        this.alertService = alertService;
        this.httpService = httpService;
        this.model = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.model);
        this.httpService.post('/service/register', this.model).subscribe(function (data) {
            debugger;
            switch (data.type) {
                case 'USER_CREATED':
                    _this.router.navigate(['/login']);
                    _this.alertService.success('Konto zostało pomyślnie stworzone.');
                    break;
                case 'USER_EXIST_WITH_USERNAME':
                    _this.alertService.error('Istnieje użytkownik z takim username.', true);
                    break;
                case 'USER_EXIST_WITH_EMAIL':
                    _this.alertService.error('Istnieje użytkownik z takim emailem.', true);
                    break;
                case 'USER_EXIST_WITH_EMAIL_AND_USERNAME':
                    _this.alertService.error('Istnieje użytkownik z takimi username i emailem.', true);
                    break;
            }
        }, function (error) {
            _this.alertService.error(error.message);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AlertService,
        index_1.HttpService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=register.component.js.map
