
import { Component, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { SimpleModalComponent, SimpleTableComponent } from '../../index';
import { HttpService } from '../../index';
import 'rxjs/Rx' ;

@Component({
  moduleId: module.id,
  selector: 'details-rss-modal',
  templateUrl: 'details-rss-modal.component.html'
})
export class DetailsRSSModalComponent
{
  @ViewChild('mainModal')
  public modal: SimpleModalComponent;

  @ViewChild('saveModal')
  public saveModal: SimpleModalComponent;

  @ViewChild('removeModal')
  public removeModal: SimpleModalComponent;

  @ViewChild('rssListTable')
  public rssListTable: SimpleTableComponent;

  @Output('after-modify') afterModify = new EventEmitter();

  private id: any = undefined;

  //[XXX]: options for editing whole list, but this is optional
  //private showingNote: any = undefined;
  //private note: any = {};

  private model: any = { title: 'loading...', rssList: {} };

  constructor (private httpService: HttpService) {}

  //[XXX]: categories select
  //[FIXME]: remove subscribe that are not needed

  fetchData (id: any)
  {
    this.id = id;
    this.httpService.get('/rss/'+id).subscribe(
      model => {
        console.log(model);
        //[REFACTOR]: jak bym przekazywal to by referencje sie zatracily
        Object.keys(model).forEach((key: any) => {
          this.model[key] = model[key];
        });
        this.modal.$loader.stop();
        if (this.rssListTable){
          this.rssListTable.fetch({});
        }
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

/*
  ngAfterViewChecked ()
  {

  }
*/
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

  onRemoveModal ()
  {
    this.removeModal.close();
    this.modal.$loader.start();
    this.httpService.delete('/rss/'+this.id).subscribe(
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
    /*
    if (this.model['name'] == undefined) return;
    //[REMOVE][FIXME]: fix the index bug
    this.model.notes.rows.forEach((row, index) => { row.data.index = index; });
    this.modal.$loader.start();
    //[FIXME]: send model without header
    this.httpService.patch('/rss/'+this.id, this.model).subscribe(
      response => {
        this.afterModify.emit(undefined);
        this.modal.close();
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
    */
  }

  /*
  onSaveNoteModal ()
  {
    //[FIXME]: loading on modify note.
    this.showingNote.data['note'] = this.model['noteContent'];
    this.showingNote.columns[1]['content'] = this.model['noteTitle'];
    this.showingNote.columns[2]['content'] = this.model['noteLink'];
    this.noteModal.close();
  }
  */

  /*
  showNote (noteData: any)
  {
    this.showingNote = this.model.notes.rows[noteData.index];
    this.model['noteContent'] = this.showingNote.data.note;
    this.model['noteTitle'] = this.showingNote.columns[1].content;
    this.model['noteLink'] = this.showingNote.columns[2].content;
    this.noteModal.show();
  }
  */

  addNote ()
  {
    /*
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
    */
  }

  removeRSSItem (rowData: any)
  {
    /*
    this.model.notes.rows.splice(rowData.index, 1);
    let l = this.model.notes.rows.length;
    for (let i = rowData.index; i < l; ++i)
    {
      this.model.notes.rows[i].data.index = this.model.notes.rows[i].data.index - 1
    }
    */
  }

  saveRSS ()
  {
    this.saveModal.show();
  }

  removeRSS ()
  {
    this.removeModal.show();
  }

  resetData ()
  {
    Object.keys(this.model).forEach((key) => { delete this.model[key]; });
    this.rssListTable.clean();
    this.model.name = 'loading...';
    this.model.rssList = {};
  }
}
