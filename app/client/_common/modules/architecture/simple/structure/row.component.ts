
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple-row',
  template: `<div class='row'> <ng-content></ng-content> </div>`
})
export class SimpleRowComponent {}
