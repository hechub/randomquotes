import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  quote: string;
  author: string;
  backColor: string;

  constructor(private quoteService: QuotesService) {
    this.quote = "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.";
    this.author = "- Booker T. Washington";
  }

  changeBackColor(){
    this.backColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(this.backColor);
  }
  
  getNewQuote(){
    this.quoteService.getNewQuote().subscribe((data)=>{
      this.quote = data[0].toString()
    });

    this.changeBackColor();
  }

  ngOnInit() {
    this.changeBackColor();
    this.getNewQuote();
  }

}
