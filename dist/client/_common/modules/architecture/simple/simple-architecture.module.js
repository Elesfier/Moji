"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_1 = require("../../../index");
var navigation_component_1 = require("./structure/navigation.component");
var root_container_component_1 = require("./structure/root-container.component");
var loader_component_1 = require("./structure/loader.component");
var row_component_1 = require("./structure/row.component");
var border_component_1 = require("./structure/border.component");
var column_component_1 = require("./structure/column.component");
var column_space_component_1 = require("./structure/column-space.component");
var select_component_1 = require("./input/select.component");
var text_input_component_1 = require("./input/text-input.component");
var button_component_1 = require("./input/button.component");
var table_component_1 = require("./table/table.component");
var text_area_component_1 = require("./input/text-area.component");
var file_component_1 = require("./input/file.component");
var form_component_1 = require("./input/form.component");
var modal_component_1 = require("./modal/modal.component");
var checkbox_component_1 = require("./input/checkbox.component");
var SimpleArchitectureModule = (function () {
    function SimpleArchitectureModule() {
    }
    return SimpleArchitectureModule;
}());
SimpleArchitectureModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        providers: [
            index_1.HttpService,
            index_1.LocalStorageService,
            index_1.FileUploadService
        ],
        declarations: [
            root_container_component_1.SimpleRootContainerComponent,
            loader_component_1.SimpleLoaderComponent,
            navigation_component_1.SimpleNavigationComponent,
            row_component_1.SimpleRowComponent,
            form_component_1.SimpleFormComponent,
            column_component_1.SimpleColumnComponent,
            column_space_component_1.SimpleColumnSpaceComponent,
            select_component_1.SimpleSelectComponent,
            text_input_component_1.SimpleTextInputComponent,
            button_component_1.SimpleButtonComponent,
            border_component_1.SimpleBorderComponent,
            text_area_component_1.SimpleTextAreaComponent,
            file_component_1.SimpleFileComponent,
            table_component_1.SimpleTableComponent,
            modal_component_1.SimpleModalTabDirective,
            modal_component_1.SimpleModalComponent,
            checkbox_component_1.SimpleCheckboxComponent
        ],
        exports: [
            root_container_component_1.SimpleRootContainerComponent,
            loader_component_1.SimpleLoaderComponent,
            navigation_component_1.SimpleNavigationComponent,
            row_component_1.SimpleRowComponent,
            column_component_1.SimpleColumnComponent,
            column_space_component_1.SimpleColumnSpaceComponent,
            select_component_1.SimpleSelectComponent,
            text_input_component_1.SimpleTextInputComponent,
            button_component_1.SimpleButtonComponent,
            border_component_1.SimpleBorderComponent,
            table_component_1.SimpleTableComponent,
            text_area_component_1.SimpleTextAreaComponent,
            file_component_1.SimpleFileComponent,
            form_component_1.SimpleFormComponent,
            modal_component_1.SimpleModalTabDirective,
            modal_component_1.SimpleModalComponent,
            checkbox_component_1.SimpleCheckboxComponent
        ]
    })
], SimpleArchitectureModule);
exports.SimpleArchitectureModule = SimpleArchitectureModule;

//# sourceMappingURL=simple-architecture.module.js.map
