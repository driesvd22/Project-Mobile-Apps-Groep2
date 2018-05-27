import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullMatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-mat',
  templateUrl: 'full-mat.html',
})
export class FullMatPage {

  material: any = [];
  soort: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.material = navParams.data.material;
    if(this.material.soort == "kwan"){
      this.soort = "kwantitatief materiaal";
    }
    else if (this.material.soort == "kwal"){
      this.soort = "kwalitatief materiaal";
    }
    else{
      this.soort = "";
    }

  }

  ionViewDidLoad() {
    console.log(this.material);
  }

}
