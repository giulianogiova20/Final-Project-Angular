import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Student } from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students : Student[] = [
    {id:1, firstName:'Giuliano',  lastName: 'Giovanelli',    email:'gg@mail.com',    isActive: true},
    {id:2, firstName:'Matias',   lastName: 'Karraz', email:'mk@mail.com',  isActive: false},
    {id:3, firstName:'Cesar', lastName: 'Bergamasco', email:'cb@mail.com', isActive: false},
    {id:4, firstName:'Joaquin',lastName: 'Castro', email:'jc@mail.com', isActive: true}
  ]
  private students$!: BehaviorSubject<Student[]>

  constructor() {
    this.students$ = new BehaviorSubject(this.students)
   }

  getStudentsPromise(): Promise<Student[]>{
    return new Promise((resolve, reject) => {
      if(this.students.length > 0){
        resolve(this.students);
      }else{
        reject([])
      }
    }) 
  }

  getStudentsObs(): Observable<Student[]>{
    return this.students$.asObservable()
  }


  /*   // Add Student
  addStudent(): void {
    const dialog = this.dialogService.open(AbmStudentComponent, { width: '25%' });
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId: number = this.students[this.students.length -1]?.id;
       this.students = 
       [...this.students, 
        { id: lastId+1, 
          firstName: value.firstName, 
          lastName: value.lastName, 
          email: value.email, 
          isActive: value.isActive 
        }];
      }
    })
  }

  // Modify Student
  editStudent(student: Student): void {
    const dialog = this.dialogService.open(AbmStudentComponent, { data: student, width: '25%' });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu);
      }
    })
  }

  // Delete Student
  deleteStudent(student: Student): void {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  } */
}
