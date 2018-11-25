
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  LocalStorageService,
  SimpleLoaderComponent,
  SimpleNavigationComponent
} from '../_common/index';
import { modules } from './index';

@Component({
    moduleId: module.id,
    templateUrl: 'content.component.html'
})

export class ContentComponent
{
  @ViewChild('contentLoader')
  public $loader: SimpleLoaderComponent;

  @ViewChild('mainContentNavigation')
  public $navigation: SimpleNavigationComponent;

  //[XXX]: Czy taka nazwe wybrac?
  private brand: string = 'Moji';
  private baseLink: string = '/moji';

  routes: any = modules.routes;

  constructor (private localStorageService: LocalStorageService)
  {
    //[XXX]: moze w przyszlosci na cos innego sie to zamieni
    this.routes.push({ path: 'home', addWithoutBase: true });
  }

  //[XXX]: check if the loader is in good position

  ngAfterViewInit ()
  {
    this.$navigation.navigate('RSS');
    this.$loader.start();
  }

  onActivate ()
  {
    this.$loader.stop();
  }

  onDeactivate ()
  {
    this.$loader.start();
  }

  removeToken ()
  {
    return this.localStorageService.rev('JOME_TOKEN');
  }

}
