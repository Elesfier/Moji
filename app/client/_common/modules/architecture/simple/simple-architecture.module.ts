
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  HttpService,
  LocalStorageService,
  FileUploadService
} from '../../../index';

import { SimpleNavigationComponent } from './structure/navigation.component';
import { SimpleRootContainerComponent } from './structure/root-container.component';
import { SimpleLoaderComponent } from './structure/loader.component';
import { SimpleRowComponent } from './structure/row.component';
import { SimpleBorderComponent } from './structure/border.component';
import { SimpleColumnComponent } from './structure/column.component';
import { SimpleColumnSpaceComponent } from './structure/column-space.component';
import { SimpleSelectComponent } from './input/select.component';
import { SimpleTextInputComponent } from './input/text-input.component';
import { SimpleButtonComponent } from './input/button.component';
import { SimpleTableComponent } from './table/table.component';
import { SimpleTextAreaComponent } from './input/text-area.component';
import { SimpleFileComponent } from './input/file.component';
import { SimpleFormComponent } from './input/form.component';
import { SimpleModalComponent, SimpleModalTabDirective } from './modal/modal.component';
import { SimpleCheckboxComponent } from './input/checkbox.component';

//[TODO]: common CSS file for components
//[TODO]: change common font for simple

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpService,
    LocalStorageService,
    FileUploadService
  ],
  declarations: [
    SimpleRootContainerComponent,
    SimpleLoaderComponent,
    SimpleNavigationComponent,
    SimpleRowComponent,
    SimpleFormComponent,
    SimpleColumnComponent,
    SimpleColumnSpaceComponent,
    SimpleSelectComponent,
    SimpleTextInputComponent,
    SimpleButtonComponent,
    SimpleBorderComponent,
    SimpleTextAreaComponent,
    SimpleFileComponent,
    SimpleTableComponent,
    SimpleModalTabDirective,
    SimpleModalComponent,
    SimpleCheckboxComponent
  ],
  exports: [
    SimpleRootContainerComponent,
    SimpleLoaderComponent,
    SimpleNavigationComponent,
    SimpleRowComponent,
    SimpleColumnComponent,
    SimpleColumnSpaceComponent,
    SimpleSelectComponent,
    SimpleTextInputComponent,
    SimpleButtonComponent,
    SimpleBorderComponent,
    SimpleTableComponent,
    SimpleTextAreaComponent,
    SimpleFileComponent,
    SimpleFormComponent,
    SimpleModalTabDirective,
    SimpleModalComponent,
    SimpleCheckboxComponent
  ]
})
export class SimpleArchitectureModule {}
