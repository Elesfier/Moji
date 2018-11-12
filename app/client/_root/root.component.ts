
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'root.component.html'
})

export class RootComponent
{
  //[REFACTOR]: on side root
  //[FIXME]: change title of application

  private loading: boolean = true;
  private platformName: string = 'Copyright';
  private copyrightYear: number = '2017-2018';
  private author: string = 'Artur Szajdecki';
  private authorEmail: string = 'artur.szajdecki@gmail.com';

  onActivate ($event)
  {
    $event.rootParent = this;
    console.log($event);
    this.loading = false;
  }
}
