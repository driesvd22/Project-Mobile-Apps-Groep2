import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Observer } from 'rxjs/Observer';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: String
  password: String

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public data: ProvDataProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkLogin(){
    
    // Logica van filebeat deze geeft email addres en naam terug
    let naam = "test"
    let email = "test.test@yahoo.com";
    let id = 3;

    let newPersoon = {
      id: id,
      naam: naam,
      email: email,
      completions: []
    }

    let test = this.data.postRemoteData(newPersoon);
    test.subscribe(data =>{
      console.log(data);
    });

    return true;
  }

  login(){
    if(this.checkLogin() === true){
      this.navCtrl.setRoot(HomePage);
    }
    else{
      alert("wrong credentials");
    }
  }
}
