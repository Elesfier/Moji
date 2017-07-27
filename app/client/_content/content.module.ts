
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent, ContentRouting, ContentGuard } from './index';
import { SimpleArchitectureModule } from '../_common/index';
import { modules } from './index';

@NgModule({
  imports: [ CommonModule, ContentRouting, SimpleArchitectureModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ ContentComponent ].concat(modules.components),
  providers: [ ContentGuard ]
})

export class ContentModule {}
