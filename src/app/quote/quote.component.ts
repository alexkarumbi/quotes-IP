import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote (1,"Happiness quite unshared can scarcely be called happiness'then it has no taste.","Charlotte Bronte","Amira",0,0,new Date(2021,10,17)),
    new Quote (2,"Work hard till money buys you happiness","Karumbi","Muthambuku",0,0,new Date(2020,8,17))
  ]
  toggleDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDelete:any,index:any){
    if(isDelete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
      this.quotes.splice(index,1);}
    }
  }
  addNewQuote(quote:any){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate =new Date(quote.notedDate)
    this.quotes.push(quote)
  }
  upvote(index:any){
    this.quotes[index].upvotes++;
  }
  downvote(index:any){
    this.quotes[index].downvotes++;}
    
  constructor() { }

  ngOnInit(): void {
  }

}
