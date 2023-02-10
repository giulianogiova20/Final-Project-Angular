import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/students';

@Component({
  selector: 'app-abm-student',
  templateUrl: './abm-student.component.html',
  styleUrls: ['./abm-student.component.css']
})
export class AbmStudentComponent {

  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  isActiveControl = new FormControl(true);

  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    isActive: this.isActiveControl,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }

  studentValid() {
    return (this.studentForm.get('firstName')?.valid && 
    this.studentForm.get('lastName')?.valid && 
    this.studentForm.get('email')?.valid)
  }
}

