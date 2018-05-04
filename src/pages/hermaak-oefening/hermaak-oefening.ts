import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { AfvalTempOefeningPage } from '../afval-temp-oefening/afval-temp-oefening';
import { AlertController } from 'ionic-angular';
import { WerkwijzeTempOefeningPage } from '../werkwijze-temp-oefening/werkwijze-temp-oefening';
import { KkTempOefeningPage } from '../kk-temp-oefening/kk-temp-oefening';
import { SplitterPage } from '../splitter/splitter';

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

  public RightMats;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    let RightMats: number[];
  }

  // Logic om te hermaken oefeningen op te halen
  teHermakenOefeningen : any = [
    {
      laboNaam: "Labo 1",
      inleverDatum: "22/05/18",
      oefeningen: 
      [
        {
          oefeningNaam: "Oefening 1",
          templates: 
          [
            {
              soort: "kkTemplateOefening"
            }, 
            {
              soort: "materialTemplate",
              uitleg: "Zorg ervoor dat je de juiste materialen gebruikt om een oplossing te kunnen maken",
              hint: "Gewoon slepen",
              juisteMaterialen: [1,2,3,4]
            }
          ]
        },
        {
          oefeningNaam: "Oefening 2",
          templates: null
        }
      ]
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad HermaakOefeningPage');
  }

  showConfirm(pageName, templates) {
    let confirm = this.alertCtrl.create({
      title: 'Are You Sure?',
      message: 'You can not go back when starting this exercise!',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(pageName, {
              templates: templates
            });
          }
        }
      ]
    });
    confirm.present();
  }

  openOefening(oefening){
    this.showConfirm(SplitterPage, oefening.templates);
  }

  checkWithRightMats(testMats: number[]){
    // logic om rightMats en testMats met elkaar te verglijken
    
    return true;
  }
}
