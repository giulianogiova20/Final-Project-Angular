import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { CoursesService } from '../services/courses.service';

import { CoursesListComponent } from './courses-list.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let dialog: typeof MAT_DIALOG_DATA
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

})

