import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/students';
import { MatDialog } from '@angular/material/dialog';
import { AbmStudentComponent } from '../abm-student/abm-student.component';
import { StudentsService } from 'src/app/services/students.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  // Students Array
  studentsData! : MatTableDataSource<Student>
  subsc!: Subscription
  studentsPromise! : Student[]

  // Table columns
  displayedColumns = ['id', 'fullname', 'email', 'isActive', 'edit', 'delete'];

  constructor(
    private readonly dialogService: MatDialog,
    private studentsService: StudentsService
    ) {}

  ngOnInit(): void {
    //MatTable with Observable
    this.studentsData = new MatTableDataSource<Student>()
    this.subsc = this.studentsService.getStudentsObs().subscribe((students: Student[]) => this.studentsData.data = students);
    
    //Promise Test
    this.studentsService.getStudentsPromise().then((students: Student[])=>{
      this.studentsPromise = students
    }).catch((error: any) => {
      console.log("Error getting Promise", error);
    })
  }

  ngOnDestroy(): void{
    this.subsc.unsubscribe();
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

