import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let stars = '';
    if(typeof value === 'number') {
      for(let i=0; i<value; i++) {
        stars += '*';
      }
    }
    return stars;
  }

}
