
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { SimpleModalComponent } from '../../index';
import { HttpService } from '../../index';

@Component({
  moduleId: module.id,
  selector: 'create-rss-modal',
  templateUrl: 'create-rss-modal.component.html'
})
export class CreateRSSModalComponent
{
  model: any = {};

  @ViewChild('modal') public modal: SimpleModalComponent;

  @Output('after-add-rss') afterAddRSS = new EventEmitter();

  constructor (private httpService: HttpService) {}

  //[IDEA]: zeby byly archiwa podzielone na kategorie

  saveArchive ()
  {
    //[TODO]: validation for title
    if (this.model['title'] == undefined) return;
    this.modal.$loader.start();
    this.httpService.put('/rss', this.model).subscribe(
      response => {
        //[TODO] response management
        this.afterAddRSS.emit(undefined);
        this.modal.close();
      },
      error => {
        //[TODO] errors management
        console.error(error);
      }
    );
  }

  resetData ()
  {
    Object.keys(this.model).forEach((key) => { delete this.model[key]; });
  }
}
