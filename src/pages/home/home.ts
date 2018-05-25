import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { MaterialsPage } from '../materials/materials';
import { TeMakenOefeningenPage } from '../te-maken-oefeningen/te-maken-oefeningen';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { SettingsPage } from '../settings/settings';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userId: number;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public navParams: NavParams) {
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
    this.toonLoading();
  }
  
  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even geduld...",
      duration: 1000
    });
    loader.present();
  }
  
}
