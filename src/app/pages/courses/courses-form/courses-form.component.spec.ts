import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoursesFormComponent } from './courses-form.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

describe('CoursesFormComponent', () => {
  let component: CoursesFormComponent;
  let fixture: ComponentFixture<CoursesFormComponent>;
  let httpCourses: HttpClient
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesFormComponent ],
      imports: [ 
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        CoursesService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form data is sent on event click "Save"', () =>{
    const form = component.courseForm
    const id = form.controls["id"]
    const name = form.controls["name"]
    const board = form.controls["board"]
    const isRegistrationOpen = form.controls["isRegistrationOpen"]
    const startDate = form.controls["startDate"]
    const endDate = form.controls["endDate"]
    const teacher = form.controls["teacher"]
    const testDate = new Date("2022-03-08T05:33:47.180Z")

    console.log("Form is empty",form.value)
    id.setValue("1")
    name.setValue("Angular")
    board.setValue("12345")
    isRegistrationOpen.setValue(true)
    startDate.setValue(testDate)
    endDate.setValue(testDate)
    teacher.setValue({
      "firstName": "Emilie",
      "lastName": "Lesch",
      "email": "stephen_gerlach7@hotmail.com",
      "registerDate": testDate,
      "id": "1"
     })

     const button = fixture.debugElement.query(By.css("#btnSave"));
     button.nativeElement.click();
 
     fixture.detectChanges()

     console.log("Form is filled", form.value)
     expect(form.value).toEqual({
      id: "1",
      name: "Angular",
      board: "12345",
      isRegistrationOpen: true,
      startDate: testDate,
      endDate: testDate,
      teacher: {
        "firstName": "Emilie",
        "lastName": "Lesch",
        "email": "stephen_gerlach7@hotmail.com",
        "registerDate": testDate,
        "id": "1"
       }
     })
  })
})
