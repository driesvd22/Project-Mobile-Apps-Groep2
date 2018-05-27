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
    this.email = null;
  }

  ionViewDidLoad() {
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

    let temp = this.prov.getAllUsers();
    temp.subscribe(data => {
      
      this.AllGebruikers = data;

      var ok: boolean = false
      this.AllGebruikers.forEach(gebruiker => {
        if(gebruiker.email == this.username.value){
          ok = true
        }
      });

      if(ok){
        this.alert('U bent succesvol ingelogd!');
        this.navCtrl.setRoot(HomePage);
      }
      else {      
        // POST van een nieuwe user in de JSON-file
        this.prov.postNewUser(this.username.value.substring(0, this.username.value.indexOf(".")), this.username.value);
      
        // Vervolgens kan de gebruiker zich inloggen
        this.alert('U bent succesvol ingelogd!');
        this.navCtrl.setRoot(HomePage);
      }
    });

    })
    .catch(error =>{
      this.alert('Incorrecte gebruikersnaam en/of passwoord!');
    })
  }
}
