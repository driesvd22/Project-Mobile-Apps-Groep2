import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
/*
  Generated class for the ProvDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvDataProvider {
  url:string = "https://jsonplaceholder.typicode.com/posts";
  users:any = [];
  constructor(public http: HttpClient) {
    console.log('The provider has been created(constructor)');
  }
  getRemoteData(){
    this.http.get(this.url).subscribe(data => {
      this.users = data;
    });
  }

}
