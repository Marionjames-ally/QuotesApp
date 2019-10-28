import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '@angular/compiler';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() quote: Quote;
  @Output() inputQuote = new EventEmitter(<Quote>);

  newQuote = new Quote(0,'', '',new Date(0,0,0) , 0, 0);
  submitForm(){
    this.inputQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
