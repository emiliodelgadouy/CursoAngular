import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trespuntitos'
})
export class TrespuntitosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + "...xxx";
  }

}
