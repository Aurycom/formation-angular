import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: number): number {
    // console.log(value);
    if (args) {
      return value.totalTTC(args);
    } else if (value) {
      return value.totalHT();
    }
    return null;
  }

}

