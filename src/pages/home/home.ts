import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MaterialsPage } from '../materials/materials';
import { TeMakenOefeningenPage } from '../te-maken-oefeningen/te-maken-oefeningen';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {

  }

  openPage(){
    alert("iets");
  }

  openMaterialPage(){
    this.navCtrl.push(MaterialsPage);
  }

  openTeMakenOefeningenPage(){
    this.navCtrl.push(TeMakenOefeningenPage);
  }

  openHermaakOefeningPage(){
    this.navCtrl.push(HermaakOefeningPage);
  }

  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }
}
