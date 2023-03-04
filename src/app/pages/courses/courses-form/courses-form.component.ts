import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { TeacherService } from 'src/app/core/services/teacher.service';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent{

  teachers$: Observable<Teacher[]> = this.teachers.getTeachers()

  teacherControl = new FormControl({}, [
    Validators.required])

  boardControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ])
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ])
  isRegistrationOpen = new FormControl(true)
  startDateControl = new FormControl('', [
    Validators.required])
  endDateControl = new FormControl('', [
    Validators.required])

  courseForm = new FormGroup({
    name: this.nameControl,
    board: this.boardControl,
    teacher: this.teacherControl,
    isregistrationOpen: this.isRegistrationOpen,
    startDateControl: this.startDateControl,
    endDateControl: this.endDateControl,
  })

  constructor(
    private teachers: TeacherService,
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Course | null
  ){
    if(data) {
      this.courseForm.patchValue(data)
      }
  }
  
  close() {
    this.dialogRef.close();
  }

}