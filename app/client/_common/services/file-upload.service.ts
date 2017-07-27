
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage-service.service';

@Injectable()
export class FileUploadService
{
  constructor(private localStorageService: LocalStorageService) {}

  public upload (params: any): Observable<any>
  {
    params.fieldname = params.fieldname || 'uploads';
    if (!(params.files.length) || !(params.url)) return;
    return this.makeFileRequest ('/api' + params.url, params.params, params.files, params.fieldname);
  }

  private makeFileRequest (
    url: string,
    params: Array<String>,
    files: Array<File>,
    fieldname: string
  ): Observable<any> {

    if (!this.localStorageService.get('JOME_TOKEN')) return;

    return Observable.create(observer => {
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++)
      {
        formData.append(fieldname, files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
        {
          if (xhr.status === 200)
          {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          }
          else
          {
            observer.error(xhr.response);
          }
        }
      };

      //[TODO]: see loading file to server
      /*xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        this.progressObserver.next(this.progress);
      };*/

      //[XXX]: chyba methoda PUT lepiej by tu pasowala
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', this.localStorageService.get('JOME_TOKEN'));
      xhr.send(formData);
    });
  }
}
