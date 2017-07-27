
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { jQuery } from '../../_common/index';

@Component({
    moduleId: module.id,
    templateUrl: 'site.component.html',
    styleUrls: [ 'site.component.css' ]
})

export class SiteComponent
{
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngAfterViewInit ()
  {
    jQuery('.project-content a[rel=popover]').popover({
      html: true,
      trigger: 'hover',
      placement: 'top',
      container: 'body',
      content: function(){return '<img style="width: 100% !important;" src="'+$(this).data('img') + '" />';}
    });
  }
}
