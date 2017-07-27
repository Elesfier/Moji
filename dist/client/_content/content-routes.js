"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../content/index");
var Modules = (function () {
    function Modules() {
        this.components = [];
        this.routes = [];
        this.routes = index_1.ContentRoutes;
        this.getComponents();
    }
    Modules.prototype.getComponents = function () {
        var checkers = [this.routes];
        for (var i = 0; i < checkers.length; ++i) {
            if (checkers[i]) {
                checkers = checkers.concat(checkers[i].map(function (item) {
                    return item['children'];
                }));
                this.components = this.components.concat(checkers[i].map(function (item) {
                    return item['component'];
                }));
            }
        }
    };
    return Modules;
}());
exports.modules = new Modules();

//# sourceMappingURL=content-routes.js.map
