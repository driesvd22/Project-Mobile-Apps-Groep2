import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the ProvDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvDataProvider {

  url: string = "https://httpbin.org/post";

  constructor(public http: HttpClient) {
    console.log('Hello ProvDataProvider Provider');
  }

  getRemoteData(){
    return this.http.get(this.url);
  }

  postRemoteData(body){
    let i = JSON.stringify(body).length;
    return this.http.post(this.url, JSON.stringify(body), {headers: {"Content-Type": "application/json"}});
  }

}
