import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormComponent } from '../courses-form/courses-form.component';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  courses!: Course[];
  courses$!: Observable<Course[]>;
  session$!: Observable<Session>

  constructor(
    private coursesService: CoursesService,
    private readonly dialogService: MatDialog,
    private session: SessionService
  ){}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
    this.session$ = this.session.getSession()
  }

  addCourse(){
    const dialog = this.dialogService.open(CoursesFormComponent);
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        let course: Course = {
          id: '',
          name: data.name,
          board: data.board,
          teacher: data.teacher,
          isRegistrationOpen: data.isRegistrationOpen,
          startDate: data.startDateControl,
          endDate: data.endDateControl,
        }
        this.coursesService.addCourse(course).subscribe((course: Course) => {
          alert(`${course.name} added`)
          this.courses$ = this.coursesService.getCourses()
        });
      }
    })
  }

  removeCourse(course: Course){
    this.coursesService.removeCourse(course).subscribe((course: Course) => {
      alert(`${course.name} deleted`)
      this.courses$ = this.coursesService.getCourses()
    });
  }

  editCourse(course: Course){
    const dialog = this.dialogService.open(CoursesFormComponent, { data: course});
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log("DATA",data)
        let course: Course = {
        id: data.id,
        name: data.name,
        board: data.board,
        teacher: data.teacher,
        isRegistrationOpen: data.isRegistrationOpen,
        startDate: data.startDateControl,
        endDate: data.endDateControl
      }
      console.log("COURSE",course)
        this.coursesService.editCourse(course)
        this.courses$ = this.coursesService.getCourses()
      }
    })
  }
}

