import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmStudentComponent } from './abm-student.component';

describe('AbmStudentComponent', () => {
  let component: AbmStudentComponent;
  let fixture: ComponentFixture<AbmStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
