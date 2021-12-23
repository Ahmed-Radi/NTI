import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temarture'
})
export class TemarturePipe implements PipeTransform {

  // ng g p temprature
  transform(value:number , unit:string ) {
     // ! is not a number --> is a number
    if(value && !isNaN(value)){
      if(unit === 'C'){
        var tempartue = (value -32)/1.8
        return tempartue
      }
      else if(unit === 'F'){
        var temprature = (value* 1.8) + 32
        return temprature
      }
    }
    return null;
  }

}
