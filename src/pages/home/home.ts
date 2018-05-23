import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
  }

  openPage(){
    alert("iets");
  }

  openMaterialPage(){
    this.toonLoading();
    this.navCtrl.push(MaterialsPage);
  }

  openTeMakenOefeningenPage(){
    this.toonLoading();
    this.navCtrl.push(TeMakenOefeningenPage);
  }

  openHermaakOefeningPage(){
    this.toonLoading();
    this.navCtrl.push(HermaakOefeningPage);
  }

  openSettingsPage(){
    this.toonLoading();
    this.navCtrl.push(SettingsPage);
  }

  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even geduld...",
      duration: 1000
    });
    loader.present();
  }
}
