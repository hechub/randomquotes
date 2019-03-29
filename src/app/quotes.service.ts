import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  api: string = "https://baconipsum.com/api/?type=meat-and-filler";

  constructor(private http: HttpClient) { }

  getNewQuote(){
    return this.http.get(this.api)
  }

}
