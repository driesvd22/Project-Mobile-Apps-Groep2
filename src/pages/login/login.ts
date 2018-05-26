import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
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

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  AllGebruikers: any;
  
  @ViewChild('username') username;
  @ViewChild('password') password;

  email: string;

  constructor(private menu: MenuController,private alertCtrl: AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public loadingCtrl: LoadingController, public prov: ProvDataProvider) {
    let temp = this.prov.getAllUsers();
    temp.subscribe(data => {
      this.AllGebruikers = data;
    });
    this.email = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkIfUserExist(email){
    
    var ok: boolean = false
    
    this.AllGebruikers.forEach(gebruiker => {
      if(gebruiker.email == email){
        ok = true;
      }
    });

    return ok;
  }
 
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login()
  {
    
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then(data=>{
      // 2. Nakijken of deze gebruiker al bestaat in de huidige JSON-file
    
    if(this.checkIfUserExist("ionut.alazaroae@pma18.onmicrosoft.com")){
      this.alert('U bent succesvol ingelogd!');
      this.navCtrl.setRoot(HomePage);
    }
    else {
      console.log("POST nieuwe gebruiker")
      // POST van een nieuwe user in de JSON-file
      // Waarden die meegegeven worden:
      // - naam (van subtring van email)
      // - email

      // In JSON-file wordt in dit geval het volgende ingevoerd:
      // - id: 1
      // - naam: "Test"
      // - email: "test.email@outlook.com"
      // - completions: (lege array)
      // - bans: (lege array)

      // Vervolgens kan de gebruiker zich inloggen
      this.alert('U bent succesvol ingelogd!');
      this.navCtrl.setRoot(HomePage);
    }
      
    })
    .catch(error =>{
      this.alert('Incorrecte gebruikersnaam en/of passwoord!');
    })
  }
}
