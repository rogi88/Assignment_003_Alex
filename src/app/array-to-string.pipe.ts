import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(arrayToTransform: string[]): any {
    return arrayToTransform.join(', ');
  }

}
