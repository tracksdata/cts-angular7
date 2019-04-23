import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class MypipePipe implements PipeTransform {
  transform(base: number, expo: number): number {
    return Math.pow(base,expo);
  }

}
