import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = [
    new Quote(1,'water is life', 'wangari mathaai', new Date(2019,27,10), 8, 2),
    new Quote(2, 'no human is limited', 'Eliud Kipchoge', new Date(2019,10,10), 103, 23),
    new Quote(3, 'water is life', 'wangari mathai', new Date(2019,3,5),333, 33 ),
    new Quote(4, 'water is life', 'wangari mathai', new Date(2019,3,5),333, 33 ),
    new Quote(5, 'water is life', 'wangari mathai', new Date(2019,3,5),333, 33 ),];
  quotes: any;
    pushQuote($event){
      $event.id=this.quotes.length+1;
      $event.upVotes=0;
      $event.downVotes=0;
      this.quotes.unshift($event);
  
    }  
 constructor(){}
    }