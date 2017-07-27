
import { Component, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { SimpleModalComponent, SimpleTableComponent, SimpleFileComponent } from '../../index';
import { HttpService } from '../../index';
import 'rxjs/Rx' ;

@Component({
  moduleId: module.id,
  selector: 'details-archive-modal',
  templateUrl: 'details-archive-modal.component.html'
})
export class DetailsArchiveModalComponent
{
  @ViewChild('mainModal')
  public modal: SimpleModalComponent;

  @ViewChild('saveModal')
  public saveModal: SimpleModalComponent;

  @ViewChild('noteModal')
  public noteModal: SimpleModalComponent;

  @ViewChild('removeModal')
  public removeModal: SimpleModalComponent;

  @ViewChild('archiveFilesUploader')
  private archiveFilesUploader: SimpleFileComponent;

  @ViewChild('noteListTable')
  private noteListTable: SimpleTableComponent;

  @ViewChild('filesListTable')
  private filesListTable: SimpleTableComponent;

  @Output('after-modify') afterModify = new EventEmitter();

  private id: any = undefined;

  private fileGuard: boolean = false;
  private listGuard: boolean = false;

  //[XXX]: options for editing whole list, but this is optional
  private showingNote: any = undefined;
  private note: any = {};

  private model: any = { title: 'loading...', notes: {} };

  constructor (private httpService: HttpService) {}

  //[XXX]: categories select
  //[FIXME]: remove subscribe that are not needed

  fetchData (id: any)
  {
    this.id = id;
    this.httpService.get('/archive/'+id).subscribe(
      model => {

        //[REFACTOR]: jak bym przekazywal to by referencje sie zatracily
        Object.keys(model).forEach((key: any) => {
          //[FIXME]: can see change
          if (key == 'hasList')
            this.model['newHasList'] = model[key];
          if (key == 'hasFiles')
            this.model['newHasFiles'] = model[key];
          if (key == 'isCheckList')
            this.model['newIsCheckList'] = model[key];
          this.model[key] = model[key];
        });
        this.modal.$loader.stop();
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  ngAfterViewChecked ()
  {
    //[FIXME]: better async do
    if (this.model['hasList'] && !this.listGuard)
    {
      this.listGuard = true;
      this.noteListTable.fetch();
    }
    if (this.model['hasFiles'] && !this.fileGuard)
    {
      this.fileGuard = true;
      this.filesListTable.fetch();
    }
  }

  onChangeCheckboxHasFiles (value: any)
  {
    //[IDEA]: control the files inside the modal
    //if (value) this.fileGuard = false;
  }

  onChangeCheckboxHasList (value: any)
  {
    //[IDEA]: control the list inside the modal
    //if (value) this.listGuard = false;
  }

  onChangeCheckboxIsCheckList (value: any)
  {
    //[IDEA]: control the check list inside the modal
    //this.listGuard = false;
  }

  onChangeCheckboxIsHidden (value: any)
  {
    //[REMOVE]
  }

  onCloseMainModal ()
  {
    this.modal.close();
  }

  onCancelSave ()
  {
    this.saveModal.close();
  }

  onCancelRemove ()
  {
    this.removeModal.close();
  }

  onCancelNote ()
  {
    this.noteModal.close();
  }

  onRemoveModal ()
  {
    this.removeModal.close();
    this.modal.$loader.start();
    this.httpService.delete('/archive/'+this.id).subscribe(
      response => {
        this.afterModify.emit(undefined);
        this.modal.close();
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  onSaveModal ()
  {
    this.saveModal.close();
    //[TODO]: validation for title
    if (this.model['title'] == undefined) return;
    //[REMOVE][FIXME]: fix the index bug
    this.model.notes.rows.forEach((row, index) => { row.data.index = index; });
    this.modal.$loader.start();
    //[FIXME]: send model without header
    this.httpService.patch('/archive/'+this.id, this.model).subscribe(
      response => {
        this.afterModify.emit(undefined);
        this.modal.close();
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  onSaveNoteModal ()
  {
    //[FIXME]: loading on modify note.
    this.showingNote.data['note'] = this.model['noteContent'];
    this.showingNote.columns[1]['content'] = this.model['noteTitle'];
    this.showingNote.columns[2]['content'] = this.model['noteLink'];
    this.noteModal.close();
  }

  downloadFile (fileData: any)
  {
    //[XXX]: chyba nie bedzie nam potrzebne this.id
    this.httpService.download('/archive/files/download/'+fileData.id).subscribe(
      response => {
        //[TODO!]: downloading the file
        let blob = new Blob([response], { type: 'text/csv' });
        let url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  addFile ()
  {
    if (this.archiveFilesUploader.isReady()) return;
    this.archiveFilesUploader.upload().subscribe(
      response => {
        //[TODO]: response management
        console.log(response);
      },
      error => {
        //[TODO]: error management
        console.error(error);
      }
    );
  }

  removeFile (fileData: any)
  {
    //[XXX]: chyba nie bedzie nam potrzebne this.id
    this.httpService.delete('/archive/files/'+fileData.id).subscribe(
      response => {
        //[TODO] response management
        this.fileGuard = false;
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  showNote (noteData: any)
  {
    this.showingNote = this.model.notes.rows[noteData.index];
    this.model['noteContent'] = this.showingNote.data.note;
    this.model['noteTitle'] = this.showingNote.columns[1].content;
    this.model['noteLink'] = this.showingNote.columns[2].content;
    this.noteModal.show();
  }

  addNote ()
  {
    if (!this.note['name']) return;
    this.model.notes.rows.push({
      data : { note: '', index: this.model.notes.rows.length },
      columns: [
        {
          content: (this.model['isCheckList'])?(false):(String(this.model.notes.rows.length + 1)),
          type: (this.model['isCheckList'])?('checkbox'):('center')
        },
        { content: this.note['name'] },
        { content: this.note['link'], type: 'link' }
      ]
    });
    this.note['name'] = '';
    this.note['link'] = '';
  }

  removeNote (rowData: any)
  {
    this.model.notes.rows.splice(rowData.index, 1);
    let l = this.model.notes.rows.length;
    for (let i = rowData.index; i < l; ++i)
    {
      this.model.notes.rows[i].data.index = this.model.notes.rows[i].data.index - 1
    }
  }

  saveArchive ()
  {
    this.saveModal.show();
  }

  removeArchive ()
  {
    this.removeModal.show();
  }

  resetData ()
  {
    Object.keys(this.model).forEach((key) => { delete this.model[key]; });
    this.fileGuard = false;
    this.listGuard = false;
    this.model.title = 'loading...';
    this.model.notes = {};
  }
}
