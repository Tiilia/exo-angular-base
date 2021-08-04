import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {
    let secondes = value % 60;
    let minutes = (value - secondes) / 60;
    return `${(minutes < 10 ? '0' + minutes : minutes)}:${(secondes < 10) ? '0' + secondes : secondes}`;
  }

}
