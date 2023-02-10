import { Component } from '@angular/core';
import { Student } from 'src/app/interfaces/students';
import { MatDialog } from '@angular/material/dialog';
import { AbmStudentComponent } from '../abm-student/abm-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  // Students Array
  students : Student[] = [
    {id:1, firstName:'Giuliano',  lastName: 'Giovanelli',    email:'gg@mail.com',    isActive: true},
    {id:2, firstName:'Matias',   lastName: 'Karraz', email:'mk@mail.com',  isActive: false},
    {id:3, firstName:'Cesar', lastName: 'Bergamasco', email:'cb@mail.com', isActive: false},
    {id:4, firstName:'Joaquin',lastName: 'Castro', email:'jc@mail.com', isActive: true}
  ]

  // Table columns
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) {}

  // Add Student
  addStudent() {
    let title="Add Student"
    const dialog = this.dialogService.open(AbmStudentComponent, { width: '25%' });
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId: number = this.students[this.students.length -1]?.id;
       this.students = [...this.students, { id: lastId+1, firstName: value.firstName, lastName: value.lastName, email: value.email, isActive: value.isActive }];
      }
    })
  }

  // Modify Student
  editStudent(student: Student) {
    let title="Edit Student"
    const dialog = this.dialogService.open(AbmStudentComponent, { data: student, width: '25%' });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu);
      }
    })
  }

  // Delete Student
  deleteStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

}

