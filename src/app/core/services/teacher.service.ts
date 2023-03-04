import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';
import { env } from 'src/environments/envitonment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private httpTeacher: HttpClient
  ) { }

  getTeachers(): Observable<Teacher[]>{
    return this.httpTeacher.get<Teacher[]>(`${env.apiURL}/teachers`)
  }
}
