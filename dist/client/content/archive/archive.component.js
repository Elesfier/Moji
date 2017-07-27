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
var index_1 = require("../index");
var details_archive_modal_component_1 = require("./details/details-archive-modal.component");
var create_archive_modal_component_1 = require("./create/create-archive-modal.component");
var ArchiveComponent = (function () {
    function ArchiveComponent() {
        this.searchParams = { showHidden: false };
        this.showLabel = 'Show';
    }
    ArchiveComponent.prototype.showDetails = function (rowData) {
        this.detailsArchiveModal.modal.show(rowData.id);
    };
    ArchiveComponent.prototype.changeHidden = function () {
        this.searchParams.showHidden = !this.searchParams.showHidden;
        this.showLabel = (this.searchParams.showHidden) ? ('Hide') : ('Show');
        this.searchNote();
    };
    ArchiveComponent.prototype.addNote = function () {
        this.createArchiveModal.modal.show();
    };
    ArchiveComponent.prototype.afterModify = function () {
        this.archiveTable.fetch(this.searchParams);
    };
    ArchiveComponent.prototype.searchNote = function () {
        this.archiveTable.fetch(this.searchParams);
    };
    ArchiveComponent.prototype.ngAfterViewInit = function () {
        this.archiveTable.fetch(this.searchParams);
    };
    return ArchiveComponent;
}());
__decorate([
    core_1.ViewChild('archiveTable'),
    __metadata("design:type", index_1.SimpleTableComponent)
], ArchiveComponent.prototype, "archiveTable", void 0);
__decorate([
    core_1.ViewChild(details_archive_modal_component_1.DetailsArchiveModalComponent),
    __metadata("design:type", details_archive_modal_component_1.DetailsArchiveModalComponent)
], ArchiveComponent.prototype, "detailsArchiveModal", void 0);
__decorate([
    core_1.ViewChild(create_archive_modal_component_1.CreateArchiveModalComponent),
    __metadata("design:type", create_archive_modal_component_1.CreateArchiveModalComponent)
], ArchiveComponent.prototype, "createArchiveModal", void 0);
ArchiveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'archive.component.html'
    })
], ArchiveComponent);
exports.ArchiveComponent = ArchiveComponent;

//# sourceMappingURL=archive.component.js.map
