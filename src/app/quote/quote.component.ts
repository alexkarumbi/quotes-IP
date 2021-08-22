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

  constructor() { }

  ngOnInit(): void {
  }

}
