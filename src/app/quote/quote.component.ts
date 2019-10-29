import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from './../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})


export class QuoteComponent implements OnInit {
  @Input() quotes= Array<Quote>()
    constructor() { }

  ngOnInit() {
  }


  completeQuote(isComplete: any,index: number){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
}
}