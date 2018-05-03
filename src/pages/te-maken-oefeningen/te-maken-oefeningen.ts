import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';

/**
 * Generated class for the TeMakenOefeningenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-te-maken-oefeningen',
  templateUrl: 'te-maken-oefeningen.html',
})
export class TeMakenOefeningenPage {

  test: String;

  // Logic om alle open labo's binnen te trekken uit json-file
  openLabos : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.test = "test";
    this.openLabos = [
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
                soort: "materialTemplate",
                juisteMaterialen: [1,2]
              },
              {
                soort: "verwijzingstemplate",
                link: "http://test.com"
              }
            ]
          },
          {
            oefeningNaam: "Oefening 2"
          }
        ]
      }
    ];
  }

  openOefening(oefening){
    this.navCtrl.setRoot(SplitterPage, {
      oefening: oefening
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeMakenOefeningenPage');
  }

}
