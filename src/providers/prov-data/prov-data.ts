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
  
  postNewUser() {
    let body = new FormData();
    body.append('naam', 'test4');
    body.append('email', 'test4.test@outlook.com');
    
    var headers = new Headers();
    headers.append("Content-Type", "application/json" );
    headers.append("Access-Control-Allow-Origin", "*");
    console.log(headers);
    let options = new RequestOptions({ headers: headers });
    
    this.http2
      .post('http://localhost:8000/api/newuser', body, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      },
      err => {
        console.log("ERROR!: ", err);
      })
  }

  postNewUser2(){
    var body = 
      {
        "naam": "test4",
        "email": "test4.test4@outlook.com"
      }
    return this.http.post(this.urlPostNewUser, body, {headers: {"Content-Type": "application/json"}});
  }

  postRemoteData(body){
    let i = JSON.stringify(body).length;
    return this.http.post(this.url, JSON.stringify(body), {headers: {"Content-Type": "application/json"}});
  }
}
