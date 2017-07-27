
import { Component } from '@angular/core';

//[XXX]: Better look?

@Component({
  moduleId: module.id,
  template: `
    <simple-border>
      <p style="padding: 0px !important; margin: 0px;">
        Moji extension <b>(Archive)</b> for <b>Google Chrome/Chromium.</b>
        <a
          href="/api/plugins/chrome"
          target="_blank"
          class="pull-right btn btn-link"
          style="padding: 0px !important;">
          Download
        </a>
      </p>
    </simple-border>
  `
})
export class PluginsComponent
{
  constructor () {}
}
