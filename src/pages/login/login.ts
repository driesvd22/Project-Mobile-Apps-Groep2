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

  userid : string;
  email: string;

  constructor(private menu: MenuController,private alertCtrl: AlertController, private fire: AngularFireAuth,public navCtrl: NavController, public loadingCtrl: LoadingController, public prov: ProvDataProvider) {
    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllGebruikers = data.Gebruikers;
    });
    this.userid = null;
    this.email = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkIfUserExist(userid){
    
    var ok: boolean = false
    
    this.AllGebruikers.forEach(gebruiker => {
      if(gebruiker.id == userid){
        ok = true;
      }
    });

    return ok;
  }

<<<<<<< HEAD
  checkLogin(){

    // 1. de logica van FireBase dat zal nagaan of username en password valid zijn
    // Indien het valide credantials zijn stuurt FireBase het volgende terug (nu is dit nog hardcoded data)
    let userId = this.fire.auth.currentUser.uid;
    let email = this.username;

=======
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
>>>>>>> master

  login()
  {
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then(data=>{
      // 2. Nakijken of deze gebruiker al bestaat in de huidige JSON-file
    if(this.checkIfUserExist(this.fire.auth.currentUser.uid)){
      console.log('got some data', this.fire.auth.currentUser.email);
      this.alert('Success! You\'re logged in ');
      this.navCtrl.setRoot(HomePage);
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
      console.log('got some data', this.fire.auth.currentUser.email);
      this.alert('Success! You\'re logged in ');
      this.navCtrl.setRoot(HomePage);
      console.log(this.fire.auth.currentUser.email);
      console.log(this.fire.auth.currentUser.uid);
    }
      
    })
    .catch(error =>{
      console.log('got an error', error);
      this.alert('Try again, maybe fill in Username and/or Password');
    })
  }
}
