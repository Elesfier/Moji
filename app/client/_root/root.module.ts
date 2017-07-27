
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  enableProdMode
} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { RootComponent } from './root.component';
import { RootRouting } from './root.routing';

import {
  AlertComponent,
  AlertService,
  LocalStorageService,
  HttpService
} from '../_common/index';

import { LoginComponent, LoginGuard } from './login/index';
import { RegisterComponent } from './register/index';
import { SiteComponent } from './site/index';

//[TODO]: when it is ready
//enableProdMode();

//[XXX]: implementacja Simple w root module

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RootRouting
    ],
    declarations: [
        RootComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        SiteComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [
        LoginGuard,
        AlertService,
        LocalStorageService,
        HttpService,
        BaseRequestOptions
    ],
    bootstrap: [RootComponent]
})

export class RootModule { }
