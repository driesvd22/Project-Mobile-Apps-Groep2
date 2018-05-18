import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { HomePage } from '../home/home';
import { TeMakenOefeningenPage } from '../te-maken-oefeningen/te-maken-oefeningen';
import { KkTempOefeningPage } from '../kk-temp-oefening/kk-temp-oefening';
import { AfvalTempOefeningPage } from '../afval-temp-oefening/afval-temp-oefening';
import { WerkwijzeTempOefeningPage } from '../werkwijze-temp-oefening/werkwijze-temp-oefening';

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
      this.navCtrl.setRoot(HomePage);
    }
    
    else if(this.templates.length == 0){
      this.navCtrl.setRoot(HomePage);
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
        case "kkTemplateOefening":{
          this.navCtrl.setRoot(KkTempOefeningPage, {
            templates: this.templates
          });
          break;
        }
        case "afvalTemplate":{
          this.navCtrl.setRoot(AfvalTempOefeningPage, {
            templates: this.templates
          });
          break;
        }
        case "werkwijzeTemplate":{
          this.navCtrl.setRoot(WerkwijzeTempOefeningPage, {
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
