import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Injectable()
export class CoursesService {

  private courses : Course[] = [
    {
      id: '49533',
      name: 'Angular',  
      teacher: {
        firstName: 'Giuliano',
        lastName: 'Giovanelli',
        email: 'gg@mail.com',
        registerDate: new Date(2022, 2, 15)
      },
      isRegistrationOpen: true,
      startDate: new Date(2023, 0, 1, 20, 30, 0),
      endDate: new Date(2023, 0, 31, 20, 30, 0)
    },
    {
      id: '49654',
      name: 'Data Science',  
      teacher: {
        firstName: 'Cesar',
        lastName: 'Bergamasco',
        email: 'cb@mail.com',
        registerDate: new Date(2022, 2, 15)
      },
      isRegistrationOpen: true,
      startDate: new Date(2023, 2, 1, 20, 30, 0),
      endDate: new Date(2023, 2, 31, 20, 30, 0)
    },
    {
      id: '49643',
      name: 'Backend',  
      teacher: {
        firstName: 'Matias',
        lastName: 'Karraz',
        email: 'mk@mail.com',
        registerDate: new Date(2022, 2, 15)
      },
      isRegistrationOpen: true,
      startDate: new Date(2023, 1, 1, 20, 30, 0),
      endDate: new Date(2023, 1, 31, 20, 30, 0)
    },
    {
      id: '49544',
      name: 'React',  
      teacher: {
        firstName: 'Joaquin',
        lastName: 'Castro',
        email: 'jc@mail.com',
        registerDate: new Date(2022, 2, 15)
      },
      isRegistrationOpen: true,
      startDate: new Date(2023, 3, 1, 20, 30, 0),
      endDate: new Date(2023, 3, 31, 20, 30, 0)
    }
  ]
  private courses$!: BehaviorSubject<Course[]>

  constructor() {
    this.courses$ = new BehaviorSubject<Course[]>(this.courses)
   }

  getCourses(): Observable<Course[]>{
    return this.courses$.asObservable()
  }

  addCourse(course: Course): void{
    this.courses.push(course);
    this.courses$.next(this.courses);
  }

  editCourse(course: Course): void{
    let index = this.courses.findIndex((c: Course) => c.id === course.id);
    if(index > -1){
      this.courses[index] = course
      this.courses$.next(this.courses);
    }
  }

  removeCourse(course: Course): void{
    let index = this.courses.findIndex((c: Course) => c.id === course.id);
    if(index > -1){
      this.courses.splice(index, 1);
      this.courses$.next(this.courses);
    }
  }
}