//this is for pulling from APIs
//then it can be used in other components in the app
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
