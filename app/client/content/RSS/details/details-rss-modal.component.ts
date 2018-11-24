
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

  private model: any = { name: 'loading...', rssList: {}, newName: null };

  constructor (private httpService: HttpService) {}

  //[XXX]: categories select
  //[FIXME]: remove subscribe that are not needed

  fetchData (id: any)
  {
    this.id = id;
    this.httpService.get('/rss/'+id).subscribe(
      model => {
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
    if (this.model['name'] == undefined) return;
    //[REMOVE][FIXME]: fix the index bug
    this.model.rssList.rows.forEach((row, index) => { row.data.index = index; });
    this.modal.$loader.start();
    //[FIXME]: send model without header
    this.saveModal.close();
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
  }

  removeRSSItem (rowData: any)
  {
    this.model.rssList.rows.splice(rowData.index, 1);
    let l = this.model.rssList.rows.length;
    for (let i = rowData.index; i < l; ++i)
    {
      this.model.rssList.rows[i].data.index = this.model.rssList.rows[i].data.index - 1;
    }
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
    this.model.newName = null;
  }
}
