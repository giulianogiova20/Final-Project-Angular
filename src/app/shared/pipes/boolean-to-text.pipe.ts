import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText'
})
export class BooleanToTextPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): unknown {
    return value ? args[0] : args[1];;
  }

}
