import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number{
    let today:Date= new Date();
    let todayWithNoTime:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value- todayWithNoTime);
    const secsInDays =86400;
    var dateDifferenceInSeconds = dateDifference*0.001
    var dateCounter =dateDifferenceInSeconds/secsInDays
    
    return dateCounter
  }

}
