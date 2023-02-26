import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesService } from './services/courses.service';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { NameFormatPipe } from 'src/app/shared/pipes/name-format.pipe';
import { BooleanToTextPipe } from 'src/app/shared/pipes/boolean-to-text.pipe';


@NgModule({
  declarations: [
    CoursesFormComponent,
    CoursesListComponent,
    NameFormatPipe,
    BooleanToTextPipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
