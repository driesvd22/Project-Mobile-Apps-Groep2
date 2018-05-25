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
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  userId: number;
  email: string;
  greeting: string;

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
    this.email = this.fire.auth.currentUser.email.substring(0, this.fire.auth.currentUser.email.indexOf("."));
    this.email = this.capitalizeFirstLetter(this.email);
    console.log(this.email);
    var d = new Date();
    var time = d.getHours();
    if (time >= 5 && time < 11 ) 
    {
      this.greeting = "Good morning ";   
    }
    if (time >= 11 && time < 14) {
      this.greeting = "It's lunchtime ";
    }
    if (time >= 14 && time < 18) {
      this.greeting = "Good afternoon ";
    }
    if (time >= 18 && time < 23) {
      this.greeting = "Good evening ";
    }
    if (time >= 23 || time < 5) {
      this.greeting = "Go get some sleep ";
    }
  }
  
  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even Geduld...",
      duration: 1000
    });
    loader.present();
  }
}
