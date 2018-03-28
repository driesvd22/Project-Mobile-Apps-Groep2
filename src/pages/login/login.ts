import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';

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

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkLogin(){
    
    //Hier gebeurt controle
  
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
