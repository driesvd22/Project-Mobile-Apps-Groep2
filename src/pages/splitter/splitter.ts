import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { HomePage } from '../home/home';
import { TeMakenOefeningenPage } from '../te-maken-oefeningen/te-maken-oefeningen';

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

  templates: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.templates = navParams.data.templates;
  }

  ionViewDidLoad() {
    if(this.templates == null){
      this.navCtrl.setRoot(TeMakenOefeningenPage);
    }
    else if(this.templates[0] == null){
      this.navCtrl.setRoot(TeMakenOefeningenPage);
    }
    else{
      switch(this.templates[0].soort){
        case "materialTemplate":{
          this.navCtrl.setRoot(MatTempOefeningPage, {
            templates: this.templates
          });
          break;
        }
        case "verwijzingstemplate":{
          this.navCtrl.setRoot(VerwijzingsTempOefeningPage, {
            templates: this.templates
          });
          break;
        }
        default:{
          this.navCtrl.setRoot(HomePage);
        }
      }
    }
  }
}
