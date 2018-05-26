import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

/*
  Generated class for the ProvDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvDataProvider {

  // Dit is momenteel de URL die verwijst naar een zelfgemaakt JSON-document
  url: string = "https://api.myjson.com/bins/dnpme";

  constructor(public http: HttpClient, public http2: Http) {

  }

  // Algemene GET Request dat de volledige JSON-file ophaald
  getAllRemoteData(){
    //return this.http.get(this.url);
    return this.http2.get(this.url).map(res => res.json());
  }

  
  postRemoteData(body){
    let i = JSON.stringify(body).length;
    return this.http.post(this.url, JSON.stringify(body), {headers: {"Content-Type": "application/json"}});
  }
}
