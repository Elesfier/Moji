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
var index_1 = require("../../index");
var index_2 = require("../../index");
require("rxjs/Rx");
var DetailsArchiveModalComponent = (function () {
    function DetailsArchiveModalComponent(httpService) {
        this.httpService = httpService;
        this.afterModify = new core_1.EventEmitter();
        this.id = undefined;
        this.fileGuard = false;
        this.listGuard = false;
        this.showingNote = undefined;
        this.note = {};
        this.model = { title: 'loading...', notes: {} };
    }
    DetailsArchiveModalComponent.prototype.fetchData = function (id) {
        var _this = this;
        this.id = id;
        this.httpService.get('/archive/' + id).subscribe(function (model) {
            Object.keys(model).forEach(function (key) {
                if (key == 'hasList')
                    _this.model['newHasList'] = model[key];
                if (key == 'hasFiles')
                    _this.model['newHasFiles'] = model[key];
                if (key == 'isCheckList')
                    _this.model['newIsCheckList'] = model[key];
                _this.model[key] = model[key];
            });
            _this.modal.$loader.stop();
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.ngAfterViewChecked = function () {
        if (this.model['hasList'] && !this.listGuard) {
            this.listGuard = true;
            this.noteListTable.fetch();
        }
        if (this.model['hasFiles'] && !this.fileGuard) {
            this.fileGuard = true;
            this.filesListTable.fetch();
        }
    };
    DetailsArchiveModalComponent.prototype.onChangeCheckboxHasFiles = function (value) {
    };
    DetailsArchiveModalComponent.prototype.onChangeCheckboxHasList = function (value) {
    };
    DetailsArchiveModalComponent.prototype.onChangeCheckboxIsCheckList = function (value) {
    };
    DetailsArchiveModalComponent.prototype.onChangeCheckboxIsHidden = function (value) {
    };
    DetailsArchiveModalComponent.prototype.onCloseMainModal = function () {
        this.modal.close();
    };
    DetailsArchiveModalComponent.prototype.onCancelSave = function () {
        this.saveModal.close();
    };
    DetailsArchiveModalComponent.prototype.onCancelRemove = function () {
        this.removeModal.close();
    };
    DetailsArchiveModalComponent.prototype.onCancelNote = function () {
        this.noteModal.close();
    };
    DetailsArchiveModalComponent.prototype.onRemoveModal = function () {
        var _this = this;
        this.removeModal.close();
        this.modal.$loader.start();
        this.httpService.delete('/archive/' + this.id).subscribe(function (response) {
            _this.afterModify.emit(undefined);
            _this.modal.close();
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.onSaveModal = function () {
        var _this = this;
        this.saveModal.close();
        if (this.model['title'] == undefined)
            return;
        this.model.notes.rows.forEach(function (row, index) { row.data.index = index; });
        this.modal.$loader.start();
        this.httpService.patch('/archive/' + this.id, this.model).subscribe(function (response) {
            _this.afterModify.emit(undefined);
            _this.modal.close();
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.onSaveNoteModal = function () {
        this.showingNote.data['note'] = this.model['noteContent'];
        this.showingNote.columns[1]['content'] = this.model['noteTitle'];
        this.showingNote.columns[2]['content'] = this.model['noteLink'];
        this.noteModal.close();
    };
    DetailsArchiveModalComponent.prototype.downloadFile = function (fileData) {
        this.httpService.download('/archive/files/download/' + fileData.id).subscribe(function (response) {
            var blob = new Blob([response], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            window.open(url);
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.addFile = function () {
        if (this.archiveFilesUploader.isReady())
            return;
        this.archiveFilesUploader.upload().subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.removeFile = function (fileData) {
        var _this = this;
        this.httpService.delete('/archive/files/' + fileData.id).subscribe(function (response) {
            _this.fileGuard = false;
        }, function (error) {
            console.error(error);
        });
    };
    DetailsArchiveModalComponent.prototype.showNote = function (noteData) {
        this.showingNote = this.model.notes.rows[noteData.index];
        this.model['noteContent'] = this.showingNote.data.note;
        this.model['noteTitle'] = this.showingNote.columns[1].content;
        this.model['noteLink'] = this.showingNote.columns[2].content;
        this.noteModal.show();
    };
    DetailsArchiveModalComponent.prototype.addNote = function () {
        if (!this.note['name'])
            return;
        this.model.notes.rows.push({
            data: { note: '', index: this.model.notes.rows.length },
            columns: [
                {
                    content: (this.model['isCheckList']) ? (false) : (String(this.model.notes.rows.length + 1)),
                    type: (this.model['isCheckList']) ? ('checkbox') : ('center')
                },
                { content: this.note['name'] },
                { content: this.note['link'], type: 'link' }
            ]
        });
        this.note['name'] = '';
        this.note['link'] = '';
    };
    DetailsArchiveModalComponent.prototype.removeNote = function (rowData) {
        this.model.notes.rows.splice(rowData.index, 1);
        var l = this.model.notes.rows.length;
        for (var i = rowData.index; i < l; ++i) {
            this.model.notes.rows[i].data.index = this.model.notes.rows[i].data.index - 1;
        }
    };
    DetailsArchiveModalComponent.prototype.saveArchive = function () {
        this.saveModal.show();
    };
    DetailsArchiveModalComponent.prototype.removeArchive = function () {
        this.removeModal.show();
    };
    DetailsArchiveModalComponent.prototype.resetData = function () {
        var _this = this;
        Object.keys(this.model).forEach(function (key) { delete _this.model[key]; });
        this.fileGuard = false;
        this.listGuard = false;
        this.model.title = 'loading...';
        this.model.notes = {};
    };
    return DetailsArchiveModalComponent;
}());
__decorate([
    core_1.ViewChild('mainModal'),
    __metadata("design:type", index_1.SimpleModalComponent)
], DetailsArchiveModalComponent.prototype, "modal", void 0);
__decorate([
    core_1.ViewChild('saveModal'),
    __metadata("design:type", index_1.SimpleModalComponent)
], DetailsArchiveModalComponent.prototype, "saveModal", void 0);
__decorate([
    core_1.ViewChild('noteModal'),
    __metadata("design:type", index_1.SimpleModalComponent)
], DetailsArchiveModalComponent.prototype, "noteModal", void 0);
__decorate([
    core_1.ViewChild('removeModal'),
    __metadata("design:type", index_1.SimpleModalComponent)
], DetailsArchiveModalComponent.prototype, "removeModal", void 0);
__decorate([
    core_1.ViewChild('archiveFilesUploader'),
    __metadata("design:type", index_1.SimpleFileComponent)
], DetailsArchiveModalComponent.prototype, "archiveFilesUploader", void 0);
__decorate([
    core_1.ViewChild('noteListTable'),
    __metadata("design:type", index_1.SimpleTableComponent)
], DetailsArchiveModalComponent.prototype, "noteListTable", void 0);
__decorate([
    core_1.ViewChild('filesListTable'),
    __metadata("design:type", index_1.SimpleTableComponent)
], DetailsArchiveModalComponent.prototype, "filesListTable", void 0);
__decorate([
    core_1.Output('after-modify'),
    __metadata("design:type", Object)
], DetailsArchiveModalComponent.prototype, "afterModify", void 0);
DetailsArchiveModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'details-archive-modal',
        templateUrl: 'details-archive-modal.component.html'
    }),
    __metadata("design:paramtypes", [index_2.HttpService])
], DetailsArchiveModalComponent);
exports.DetailsArchiveModalComponent = DetailsArchiveModalComponent;

//# sourceMappingURL=details-archive-modal.component.js.map
