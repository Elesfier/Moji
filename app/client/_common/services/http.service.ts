
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { LocalStorageService } from './local-storage-service.service';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService
{
    private headers: Headers;

    constructor (
      private http: Http,
      private localStorageService: LocalStorageService)
    {
      this.attachToken();
    }

    private attachToken ()
    {
      if (this.localStorageService.get('JOME_TOKEN'))
      {
        const token: string = this.localStorageService.get('JOME_TOKEN');
        if (this.headers && this.headers.get('Authorization') === token) return;
        this.headers = new Headers();
        this.headers.append('Authorization', token);
      }
    }

    private createURLSearchParams (searchParams: Object): any
    {
      let search = null;
      if (searchParams)
      {
        search = new URLSearchParams();
        Object.keys(searchParams).forEach((key)=>{
          search.set(key, searchParams[key]);
        });
      }
      return search;
    }

    post (url: string, body: Object = {}, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.post('/api'+url, body, {
        headers: (attachToken)?(this.headers):(undefined)
      }).map((response: Response) => {
        return response.json();
      });
    }

    patch (url: string, body: Object = {}, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.patch('/api'+url, body, {
        headers: (attachToken)?(this.headers):(undefined)
      }).map((response: Response) => {
        return response.json();
      });
    }

    put (url: string, body: Object = {}, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.put('/api'+url, body, {
        headers: (attachToken)?(this.headers):(undefined)
      }).map((response: Response) => {
        return response.json();
      });
    }

    get (url: string, search: Object = undefined, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.get('/api'+url, {
        search: (search)?(this.createURLSearchParams(search)):(search),
        headers: (attachToken)?(this.headers):(undefined)
      }).map((response: Response) => {
        return response.json();
      });
    }

    //[XXX]: I need that?
    download (url: string, search: Object = undefined, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.get('/api'+url, {
        search: (search)?(this.createURLSearchParams(search)):(search),
        headers: (attachToken)?(this.headers):(undefined)
      });
    }

    delete (url: string, search: Object = undefined, attachToken: boolean = true)
    {
      if (attachToken) this.attachToken();
      return this.http.delete('/api'+url, {
        search: (search)?(this.createURLSearchParams(search)):(search),
        headers: (attachToken)?(this.headers):(undefined)
      }).map((response: Response) => {
        return response.json();
      });
    }

}
