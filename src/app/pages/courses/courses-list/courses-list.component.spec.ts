import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { CoursesService } from '../services/courses.service';

import { CoursesListComponent } from './courses-list.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      imports: [ 
        MaterialModule,
        HttpClientTestingModule
      ],
      providers: [ 
        CoursesService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*   it('Form data is valid', () =>{
    const form = component.
    const id = form.controls["id"]
    const name = form.controls["name"]
    const board = form.controls["board"]
    const isRegistrationOpen = form.controls["isRegistrationOpen"]
    const startDate = form.controls["startDate"]
    const endDate = form.controls["endDate"]
    const teacher = form.controls["teacher"]
    const testDate = new Date("2022-03-08T05:33:47.180Z")

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

     const courseToSend = component.data
     console.log(courseToSend)
     expect(courseToSend).toEqual({
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
     }
     ) */

})

