
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple-form',
  template: `
    <form>
      <ng-content></ng-content>
    </form>
  `
})
export class SimpleFormComponent
{
  @Input('bind') bind: any;
}
