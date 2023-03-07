import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../models/student';
import { Teacher } from 'src/app/models/teacher';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(person: Student | Teacher, ...args: any[]): string {
    let fullname: string
    return person.firstName!==undefined? fullname = `${person.firstName} ${person.lastName}` : args[0]
  }
}
