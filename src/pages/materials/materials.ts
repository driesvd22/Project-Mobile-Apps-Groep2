import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullMatPage } from '../full-mat/full-mat';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

/**
 * Generated class for the MaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html',
})
export class MaterialsPage {

  AllMaterialen: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public prov: ProvDataProvider) {
    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllMaterialen = data.materialen;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialsPage');
  }

  goToMatPage(material){
    this.navCtrl.push(FullMatPage, {
      material: material
    });
  }
}
