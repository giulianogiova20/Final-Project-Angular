import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent{

  idControl = new FormControl('', [
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
    id: this.idControl,
    name: this.nameControl,
    isregistrationOpen: this.isRegistrationOpen,
    startDateControl: this.startDateControl,
    endDateControl: this.endDateControl,
  })

  constructor(
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