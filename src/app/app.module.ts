import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { MainComponent } from './components/main/main.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { AbmStudentComponent } from './components/abm-student/abm-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextSizeDirective } from './directives/text-size.directive';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { ActiveStudentsComponent } from './components/active-students/active-students.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    StudentsComponent,
    AbmStudentComponent,
    TextSizeDirective,
    NameFormatPipe,
    ActiveStudentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
