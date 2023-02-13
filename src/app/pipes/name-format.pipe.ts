import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/students';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(student: Student): string {
    let fullname: string
    return fullname = `${student.firstName} ${student.lastName}`
  }

}
