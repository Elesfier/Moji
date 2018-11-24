
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SimpleTableComponent, HttpService } from '../index';
import { DetailsRSSModalComponent } from './details/details-rss-modal.component';
import { CreateRSSModalComponent } from './create/create-rss-modal.component';

@Component({
  moduleId: module.id,
  templateUrl: 'rss.component.html'
})
export class RSSComponent implements AfterViewInit
{
  @ViewChild('rssTable')
  rssTable: SimpleTableComponent;

  @ViewChild(DetailsRSSModalComponent)
  detailsRSSModal: DetailsRSSModalComponent;

  @ViewChild(CreateRSSModalComponent)
  createRSSModal: CreateRSSModalComponent;

  constructor (private httpService: HttpService) {}

  showDetails (rowData: any)
  {
    this.detailsRSSModal.modal.show(rowData.id);
  }

  getFirst ( rowDate: any )
  {
    this.rssTable.$loader.start();
    this.httpService.get('/rss-first/'+rowDate.id).subscribe(
      response => {
        if (response.url) window.open(response.url, '_blank');
        this.rssTable.fetch({});
      },
      error => {
        console.error(error);
      }
    );
  }

  addRSS ()
  {
    this.createRSSModal.modal.show();
  }

  update ()
  {
    this.rssTable.$loader.start();
    this.httpService.post('/rss-update').subscribe(
      response => {
        this.rssTable.fetch({});
      },
      error => {
        console.error(error);
      }
    );
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
