
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SimpleTableComponent } from '../index';
import { DetailsArchiveModalComponent } from './details/details-archive-modal.component';
import { CreateArchiveModalComponent } from './create/create-archive-modal.component';

@Component({
  moduleId: module.id,
  templateUrl: 'archive.component.html'
})
export class ArchiveComponent implements AfterViewInit
{
  @ViewChild('archiveTable')
  archiveTable: SimpleTableComponent;

  @ViewChild(DetailsArchiveModalComponent)
  detailsArchiveModal: DetailsArchiveModalComponent;

  @ViewChild(CreateArchiveModalComponent)
  createArchiveModal: CreateArchiveModalComponent;

  searchParams: any = { showHidden: false };
  showLabel: string = 'Show';

  showDetails (rowData: any)
  {
    this.detailsArchiveModal.modal.show(rowData.id);
  }

  //[FIXME]: upgrade look of button of visibility hidded archives
  changeHidden ()
  {
    this.searchParams.showHidden = !this.searchParams.showHidden;
    this.showLabel = (this.searchParams.showHidden)?('Hide'):('Show');
    this.searchNote();
  }

  addNote ()
  {
    this.createArchiveModal.modal.show();
  }

  afterModify ()
  {
    this.archiveTable.fetch(this.searchParams);
  }

  searchNote ()
  {
    //[IDEA]: on prev search, do not fetch
    this.archiveTable.fetch(this.searchParams);
  }

  ngAfterViewInit ()
  {
    this.archiveTable.fetch(this.searchParams);
  }
}
