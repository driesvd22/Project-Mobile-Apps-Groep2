import {Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import "rxjs/add/operator/map";

/*
  Generated class for the ProvDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvDataProvider {

  // Dit is momenteel de URL die verwijst naar een zelfgemaakt JSON-document
  urlUsers: string = "http://localhost:8000/api/users";
  urlLabos: string = "http://localhost:8000/api/labs";
  urlAllMaterials: string = "http://localhost:8000/api/materials";

  urlPostNewUser: string = "http://localhost:8000/api/newuser";
  urlPostNewBan: string = "http://localhost:8000/api/newban";
  urlPostNewCompletion: string = "http://localhost:8000/api/newcompletion";

  url: string = "https://api.myjson.com/bins/m4a4m";

  constructor(public http: HttpClient, public http2: Http) {

  }

  getAllUsers(){
    return this.http2.get(this.urlUsers).map(res => res.json());
  }

  getAllLabos(){
    return this.http2.get(this.urlLabos).map(res => res.json());
  }

  getAllMaterials(){
    return this.http2.get(this.urlAllMaterials).map(res => res.json());
  }

  // Algemene GET Request dat de volledige JSON-file ophaald
  getAllRemoteData(){
    //return this.http.get(this.url);
    return this.http2.get(this.url).map(res => res.json());
  }

  postNewUser(naam, email){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Origin","*");
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var body = 
    {
      "naam": naam,
      "email": email
    }

    this.http2.post(this.urlPostNewUser, body, options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  postNewBan(userId, oefeningId, eindeBan){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Origin","*");
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var body = 
    {
      "userId": userId,
      "oefeningId": oefeningId,
      "eindBan": eindeBan
    }

    this.http2.post(this.urlPostNewBan, body, options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  postNewCompletion(userId, oefeningId){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Access-Control-Allow-Origin","*");
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var body = 
    {
      "userId": userId,
      "oefeningId": oefeningId
    }

    this.http2.post(this.urlPostNewCompletion, body, options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);// Error getting the data
      });
  }
}
