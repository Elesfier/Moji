
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertService,
  HttpService } from '../../_common/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {

    //@ViewChild(LoaderDirective) contentLoader: LoaderDirective;
    model: any = {
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    };

    constructor(
      private router: Router,
      private alertService: AlertService,
      private httpService: HttpService) {}

    register() {
      console.log(this.model);
      //this.contentLoader.start();
      this.httpService.post('/service/register', this.model).subscribe(
        data => {
            debugger;
            switch (data.type)
            {
              case 'USER_CREATED':
                this.router.navigate(['/login']);
                this.alertService.success('Konto zostało pomyślnie stworzone.');
                break;
              case 'USER_EXIST_WITH_USERNAME':
                this.alertService.error('Istnieje użytkownik z takim username.', true);
                break;
              case 'USER_EXIST_WITH_EMAIL':
                this.alertService.error('Istnieje użytkownik z takim emailem.', true);
                break;
              case 'USER_EXIST_WITH_EMAIL_AND_USERNAME':
                this.alertService.error('Istnieje użytkownik z takimi username i emailem.', true);
                break;
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
