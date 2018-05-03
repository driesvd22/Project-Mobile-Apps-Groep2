import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { HomePage } from '../home/home';

/**
 * Generated class for the SplitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splitter',
  templateUrl: 'splitter.html',
})
export class SplitterPage {

  oefening: any = [];

  templates: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oefening = navParams.data.oefening;

    this.oefening.templates.forEach(template => {
      this.templates.push(template);
    });
  }

  ionViewDidLoad() {
    switch(this.templates[0].soort){
      case "materialTemplate":{
        this.navCtrl.setRoot(MatTempOefeningPage, {
          templates: this.templates
        });
        break;
      }
      case "verwijzingstemplate":{
        this.navCtrl.setRoot(VerwijzingsTempOefeningPage);
        break;
      }
      default:{
        this.navCtrl.setRoot(HomePage);
      }
    }
  }
}
