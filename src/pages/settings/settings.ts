import { Component } from '@angular/core';
import {Brightness} from '@ionic-native/brightness';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  brightness: number;


  constructor(private bright: Brightness,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  setBrightness(){

    let newBrightness = this.brightness / 10;
    this.bright.setBrightness(newBrightness);
  }

}
