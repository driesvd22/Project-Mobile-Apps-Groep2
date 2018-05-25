import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { MaterialsPage } from '../materials/materials';
import { TeMakenOefeningenPage } from '../te-maken-oefeningen/te-maken-oefeningen';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { SettingsPage } from '../settings/settings';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userId: number;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.userId = navParams.data.userId;
  }

  openMaterialPage(){
    this.navCtrl.push(MaterialsPage);
  }

  openTeMakenOefeningenPage(){
    this.navCtrl.push(TeMakenOefeningenPage, {
      userId: this.userId
    });
  }

  openHermaakOefeningPage(){
    this.navCtrl.push(HermaakOefeningPage, {
      userId: this.userId
    });
  }

  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    //this.toonLoading();
    //User waarmee je inlogt zijn email
    let email = this.fire.auth.currentUser.email.substring(0, this.fire.auth.currentUser.email.indexOf("."));
    console.log(email);
  }
  
  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even Geduld...",
      duration: 1000
    });
    loader.present();
  }
}
