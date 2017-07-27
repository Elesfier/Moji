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
var index_1 = require("../../_common/index");
var router_1 = require("@angular/router");
var LoginGuard = (function () {
    function LoginGuard(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (this.localStorageService.get('JOME_TOKEN')) {
            this.router.navigate(['/moji']);
            return false;
        }
        return true;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.LocalStorageService])
], LoginGuard);
exports.LoginGuard = LoginGuard;

//# sourceMappingURL=login.guard.js.map
