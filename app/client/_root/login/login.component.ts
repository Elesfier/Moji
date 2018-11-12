
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
      //FIXME Rozwiazanie tymczasowe
      if (this.rootParent) this.rootParent.loading = true;

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
                
                //FIXME Rozwiazanie tymczasowe
                if (this.rootParent) this.rootParent.loading = false;
              }
          },
          error => {
              this.alertService.error(error.message);

              //FIXME Rozwiazanie tymczasowe
              if (this.rootParent) this.rootParent.loading = false;
          }
      );
    }
}
