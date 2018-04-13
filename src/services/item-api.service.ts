import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApi {

  constructor(private http: Http) {}

  getItems(){
      console.log('started');
    return new Promise(resolve => {
        this.http.get('assets/data.json')
          .subscribe(res => resolve(res.json()));
    });
  }

  getBitCoinItems(){
    console.log('started');
    return new Promise(resolve => {
        this.http.get('https://api.coinmarketcap.com/v1/ticker/?convert=INR&start=1&limit=10')
            .subscribe(res => resolve(res.json()));
    });
  }

}