import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkPath'
})
export class LinkPathPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    try{
      const url = new URL(value)
      return url.pathname.slice(1)
    }
    catch(e){
      return value
    }
  }

}
