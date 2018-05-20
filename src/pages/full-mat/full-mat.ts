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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.material = navParams.data.material;
  }

  ionViewDidLoad() {
    console.log(this.material);
  }

}
