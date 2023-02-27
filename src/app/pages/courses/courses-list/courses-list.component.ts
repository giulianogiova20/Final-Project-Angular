import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { MatDialog } from '@angular/material/dialog';
import { CoursesFormComponent } from '../courses-form/courses-form.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{
  courses!: Course[];
  courses$!: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private readonly dialogService: MatDialog,
  ){}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
  }

  addCourse(){
    const dialog = this.dialogService.open(CoursesFormComponent);
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        let course: Course = {
          id: data.id,
          name: data.name,
          teacher: {
            firstName: "Nuevo",
            lastName: "Profe",
            email: "profe@mail.com",
            registerDate: new Date()
          },
          isRegistrationOpen: data.isRegistrationOpen,
          startDate: data.startDateControl,
          endDate: data.endDateControl,
        }
        this.coursesService.addCourse(course)
      }
    })
  }

  removeCourse(course: Course){
    this.coursesService.removeCourse(course);
  }

  editCourse(course: Course){
    const dialog = this.dialogService.open(CoursesFormComponent, { data: course});
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log("DATA",data)
        let course: Course = {
        id: data.id,
        name: data.name,
        teacher: {
          firstName: "Nuevo",
          lastName: "Profe",
          email: "profe@mail.com",
          registerDate: new Date()
        },
        isRegistrationOpen: data.isRegistrationOpen,
        startDate: data.startDateControl,
        endDate: data.endDateControl
      }
      console.log("COURSE",course)
        this.coursesService.editCourse(course)
      }
    })
  }
}

