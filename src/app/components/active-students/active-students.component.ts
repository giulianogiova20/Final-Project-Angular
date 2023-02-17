import { AfterContentChecked, AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/students';
import { map, of, Observable, Subscriber, Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-active-students',
  templateUrl: './active-students.component.html',
  styleUrls: ['./active-students.component.css']
})

export class ActiveStudentsComponent implements OnInit, AfterContentChecked, OnDestroy{
  studentsPromise!: Student[]
  studentsActive!: Student[]
  subsc!: Subscription

  constructor(
    private studentsService: StudentsService
  ){
  }

  ngOnInit(): void{
    //Providing Data from Promise
    this.studentsService.getStudentsPromise().then((students: Student[])=>{
      this.studentsPromise = students
    }).catch((error: any) => {
      console.log("Error getting Promise", error);
    })
  }

  ngAfterContentChecked(): void {
    //Using operators to retrieve active students
    this.subsc = of(this.studentsPromise).pipe(
      map((students: Student[]) => {
        return students.filter((student: Student) => student.isActive == true)
      })
    ).subscribe((students)=>{ this.studentsActive = students})
  }

  ngOnDestroy(): void {
    this.subsc.unsubscribe();
  }
}
