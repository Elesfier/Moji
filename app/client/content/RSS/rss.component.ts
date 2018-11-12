
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SimpleTableComponent } from '../index';
import { DetailsRSSModalComponent } from './details/details-rss-modal.component';
import { CreateRSSModalComponent } from './create/create-rss-modal.component';

@Component({
  moduleId: module.id,
  templateUrl: 'rss.component.html'
})
export class RSSComponent implements AfterViewInit
{

  @ViewChild('rssTable') rssTable: SimpleTableComponent;

  @ViewChild(DetailsRSSModalComponent)
  detailsRSSModal: DetailsRSSModalComponent;

  @ViewChild(CreateRSSModalComponent)
  createRSSModal: CreateRSSModalComponent;


  showDetails (rowData: any)
  {
    this.detailsRSSModal.modal.show(rowData.id);
  }

  addRSS ()
  {
    this.createRSSModal.modal.show();
  }

  afterModify ()
  {
    this.rssTable.fetch({});
  }

  ngAfterViewInit ()
  {
    this.rssTable.fetch({});
  }
}
