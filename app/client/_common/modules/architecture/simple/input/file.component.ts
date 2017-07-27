
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FileUploadService } from '../../../../index';

@Component({
  moduleId: module.id,
  selector: 'simple-file',
  template: `
    <label style="margin-right: 10px;" [attr.class]="'btn btn-' + look + ' btn-file'">
      {{label}}
      <input
        (change)="onFileChangeInput($event)"
        [disabled]="disabled"
        type="file"
        style="display: none;">
    </label>
    <div
      [style.width.px]="widthFilename"
      style="vertical-align: middle; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
      {{filename}}
    </div>
  `
})
export class SimpleFileComponent
{

  //[FIXME]: to long files styles

  @Input('label') label: string = 'Browse';
  @Input('url') url: string = undefined;
  @Input('fieldname') fieldname: string = '';
  @Input('look') look: string = 'default';
  @Input('width-name') widthFilename: number = 80;
  @Input('disabled') disabled: boolean = false;

  @Output('on-file-change') onFileChange = new EventEmitter();

  //[XXX]: czy to nie powinno byc array?
  private filesToUpload: Array<File> = [];
  private filename: string = '';

  constructor(private fileUploadService: FileUploadService) {}

  onFileChangeInput (fileInput: any)
  {
    if ((<Array<File>>fileInput.target.files).length == 0) return;
    this.filesToUpload = <Array<File>> fileInput.target.files;
    this.filename = this.filesToUpload[0].name;
    this.onFileChange.emit(fileInput.target.files);
  }

  isReady ()
  {
    return (this.filesToUpload.length == 0);
  }

  upload (params: any = {}): Observable<any>
  {
    if (this.isReady()) return;
    return this.fileUploadService.upload({
      url: params.url || this.url,
      files: this.filesToUpload,
      fieldname: params.fieldname || this.fieldname,
      params: params.params || {}
    });
  }
}
