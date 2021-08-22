import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote (1,"Happiness quite unshared can scarcely be called happiness'then it has no taste.","Charlotte Bronte","Amira",0,0,new Date(2018,10,17))
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
