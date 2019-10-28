import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  upVote(){
    this.quote.upVote++
  }

  downVote(){
    this.quote.downVote++
  }

  @Input () quote: Quote 

  constructor() {}
  @Output() isComplete= new EventEmitter<boolean>();
  
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }
 
}

