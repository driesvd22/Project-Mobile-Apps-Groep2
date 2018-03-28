import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OefeningMakenPage } from '../oefening-maken/oefening-maken';

/**
 * Generated class for the HermaakOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hermaak-oefening',
  templateUrl: 'hermaak-oefening.html',
})
export class HermaakOefeningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HermaakOefeningPage');
  }
  
  openOefening(id){
    this.navCtrl.push(OefeningMakenPage, {
      param1: id
    });
  }
}
