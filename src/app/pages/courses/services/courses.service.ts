import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Course } from 'src/app/models/course';
import { env } from 'src/environments/envitonment';

@Injectable()
export class CoursesService {

  constructor(
    private httpCourses: HttpClient
  ) {}

  getCourses(): Observable<Course[]>{
    return this.httpCourses.get<Course[]>(`${env.apiURL}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.captureError)
    )
  }

  addCourse(course: Course): Observable<Course>{
    return this.httpCourses.post<Course>(`${env.apiURL}/courses`, course, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.captureError)
    );
  }

  editCourse(course: Course): Observable<Course>{
    return this.httpCourses.put<Course>(`${env.apiURL}/courses/${course.id}`, course, {
      headers: new HttpHeaders({
        'user': 'Profe'
      })
    }).pipe(
      catchError(this.captureError)
    );
  }

  removeCourse(course: Course): Observable<Course>{
    return this.httpCourses.delete<Course>(`${env.apiURL}/courses/${course.id}`, {
      headers: new HttpHeaders({
        'user': 'Profe'
      })
    }).pipe(
      catchError(this.captureError)
    );
  }

  private captureError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Error on client side: ${error.message}`);
    }else{
      alert(`Server error: ${error.message}`);
    }

    return throwError(() => new Error('Error processing courses service'));
  }
}