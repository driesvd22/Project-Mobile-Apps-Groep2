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
  url:string = "https://jsonplaceholder.typicode.com/posts";
  path:string = "../../../users.json";
  constructor(public http: HttpClient) {
    console.log('The provider has been created(constructor)');
  }
  getRemoteData(){
    return this.http.get(this.url);
  }
  postRemoteData(){
    
    let body =  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    let i = JSON.stringify(body).length;
    //headers.append("Content-Length", i.toString());
    /*return*/this.http.post("https://httpbin.org/post", JSON.stringify(body), {headers: {"Content-Type": "application/json"}}).subscribe(data => {
      console.log(data);
    });
  }

}
