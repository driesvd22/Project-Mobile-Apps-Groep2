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
  el = [];
  json: any;
  item: any; 
  constructor(public http: HttpClient) {
    console.log('The provider has been created(constructor)');
  }
  getRemoteData(){
    this.http.get("https://api.myjson.com/bins/ph9ob").subscribe(data => {
       this.json = data;
    });
  }
  convertToArray(json){
    for(let i of json.data){
      this.el.push(i.widget.debug);
    }
    this.item = json;
  }
}
