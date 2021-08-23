import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';
@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):any{
  
    let today:Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    let dateDifference =Math.abs( todayWithNoTime - value);
    console.log(dateDifference, "here is the date")
    let dateDifferenceInSeconds = dateDifference*0.001
    let dateCounter =Math.floor(dateDifferenceInSeconds/86400)
    
    if(dateCounter > 0){
      return dateCounter + " days ago"
    }else{
      return("Today")
    }
  }

} 
