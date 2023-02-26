import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../models/student';
import { Teacher } from 'src/app/models/teacher';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(person: Student | Teacher): string {
    let fullname: string
    return fullname = `${person.firstName} ${person.lastName}`
  }
}
