import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

/**
 * Generated class for the TestDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-data',
  templateUrl: 'test-data.html',
})
export class TestDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ProvDataProvider) {
  }

  ionViewDidLoad() {
    this.data.getRemoteData();
  }

}
