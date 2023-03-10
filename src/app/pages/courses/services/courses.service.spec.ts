import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import { Course } from 'src/app/models/course';
import { of } from 'rxjs';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CoursesService, HttpClientModule ],
      imports: [ HttpClientTestingModule ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CoursesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("This service returns mocked data", (done: DoneFn)=>{
    let testDate = new Date()
    const mockData: Course[] = [
      {
       "name": "Angular Basico",
       "board": "32610",
       "startDate": testDate,
       "endDate": testDate,
       "isRegistrationOpen": true,
       "teacher": {
        id: "1",
        firstName: "Nuevo",
        lastName: "Profe",
        email: "profe@mail.com",
        registerDate: testDate
       },
       "id": "1"
      },
      {
        "name": "Vue JS",
        "board": "32611",
        "startDate": testDate,
        "endDate": testDate,
        "isRegistrationOpen": true,
        "teacher": {
         id: "1",
         firstName: "Nuevo",
         lastName: "Profe",
         email: "profe@mail.com",
         registerDate: testDate
        },
        "id": "2"
       }
     ];

     httpClientSpy.get.and.returnValue(of(mockData));

     service.getCourses().subscribe((cursos: Course[]) => {
       expect(cursos).toEqual(mockData);
       done();
     });
  })
});
