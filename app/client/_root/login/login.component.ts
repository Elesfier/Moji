
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  HttpService,
  LocalStorageService } from '../../_common/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent
{
    //@ViewChild(LoaderDirective) contentLoader: LoaderDirective;
    model: any = { username: '', password: '' };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private httpService: HttpService,
        private alertService: AlertService,
        private localStorageService: LocalStorageService) {}

    login ()
    {
      //this.contentLoader.start();
      this.httpService.post('/service/login',{
          login: this.model.username,
          password: this.model.password
      }).subscribe(
          data => {
              if (data.type)
              {
                this.localStorageService.set('JOME_TOKEN', data.data.token);
                this.router.navigate(['/moji']);
              }
              else
              {
                this.alertService.warning('Wrong Username or Email or Password.');
              }
              //this.contentLoader.stop();
          },
          error => {
              this.alertService.error(error.message);
              //this.contentLoader.stop();
          }
      );
    }
}
