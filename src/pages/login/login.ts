import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
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

  AllGebruikers: any;
  
  username: String
  password: String

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public prov: ProvDataProvider) {
    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllGebruikers = data.Gebruikers;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkIfUserExist(userId){
    
    var ok: boolean = false
    
    this.AllGebruikers.forEach(gebruiker => {
      if(gebruiker.id == userId){
        ok = true;
      }
    });

    return ok;
  }

  checkLogin(){

    // 1. de logica van Filebeat dat zal nagaan of username en password valid zijn
    // Indien het valide credantials zijn stuurt filebeat het volgende terug (nu is dit nog hardcoded data)
    let userId = 1
    let naam = "Test"
    let email = "test.email@outlook.com"


    // 2. Nakijken of deze gebruiker al bestaat in de huidige JSON-file
    if(this.checkIfUserExist(userId)){
      this.login(userId);
    }
    else {
      // POST van een nieuwe user in de JSON-file
      // Waarden die meegegeven worden:
      // - userId
      // - naam
      // - email

      // In JSON-file wordt in dit geval het volgende ingevoerd:
      // - id: 1
      // - naam: "Test"
      // - email: "test.email@outlook.com"
      // - completions: (lege array)
      // - bans: (lege array)

      // Vervolgens kan de gebruiker zich inloggen
      this.login(userId);
    }
  }

  login(userId){
    this.navCtrl.setRoot(HomePage, {
      userId: userId
    });
  }
}
