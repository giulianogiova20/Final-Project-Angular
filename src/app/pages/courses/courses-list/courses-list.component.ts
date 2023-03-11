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
          startDate: data.startDate,
          endDate: data.endDate,
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
    const dialog = this.dialogService.open(CoursesFormComponent, {data: course});
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.coursesService.editCourse(data).subscribe((data: Course) => {
          alert(`${data.name} Edited`)
          this.courses$ = this.coursesService.getCourses()
        })
      }
    })
  }
}

