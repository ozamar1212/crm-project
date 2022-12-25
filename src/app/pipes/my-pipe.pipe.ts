import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(
    value: any[],
    search: string,
    prop: keyof Customer | keyof Contact
  ): any {
    let filtered: Customer[] = [];
    if (value.length == 0 || search === '') return value;
    else {
      for (let val of value) {
        if (
          (val[prop] as string).toLowerCase().includes(search.toLowerCase())
        ) {
          filtered.push(val);
        }
      }
      return filtered;
    }
  }
}
