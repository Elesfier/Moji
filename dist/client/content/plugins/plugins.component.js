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
var PluginsComponent = (function () {
    function PluginsComponent() {
    }
    return PluginsComponent;
}());
PluginsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        template: "\n    <simple-border>\n      <p style=\"padding: 0px !important; margin: 0px;\">\n        Moji extension <b>(Archive)</b> for <b>Google Chrome/Chromium.</b>\n        <a\n          href=\"/api/plugins/chrome\"\n          target=\"_blank\"\n          class=\"pull-right btn btn-link\"\n          style=\"padding: 0px !important;\">\n          Download\n        </a>\n      </p>\n    </simple-border>\n  "
    }),
    __metadata("design:paramtypes", [])
], PluginsComponent);
exports.PluginsComponent = PluginsComponent;

//# sourceMappingURL=plugins.component.js.map
