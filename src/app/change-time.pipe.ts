import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTime',
})
export class ChangeTimePipe implements PipeTransform {
  transform(value: string): string {
    let newValue = Number(value);
    if (newValue == 12) return newValue.toString();
    newValue -= 12;
    return newValue.toString();
  }
}
