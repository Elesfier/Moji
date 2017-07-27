
import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple-root-container',
  template: `
    <div>
      <div class="container">
        <ng-content select="simple-container-content"></ng-content>
        <hr>
        <footer>
          <ng-content select="simple-container-footer"></ng-content>
        </footer>
        <br>
      </div>
    </div>
  `
})
export class SimpleRootContainerComponent
{
  //[REMOVE]: teraz to skasowania, w przyszlosci pewnie sie przyda
}
