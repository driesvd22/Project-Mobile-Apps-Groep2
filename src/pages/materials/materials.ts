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

  AllMaterialen: any = [
    {
      id: 1,
      afbeelding: "assets/imgs/AnalytischBalans.png",
      name: "Analytisch Balans",
      soort: "kwan"
    },
    {
      id: 2,
      afbeelding: "assets/imgs/Bovenweger.png",
      name: "Bovenweger",
      soort: "kwal"
    },
    {
      id: 3,
      afbeelding: "assets/imgs/Buret.png",
      name: "Buret",
      soort: "kwan"
    },
    {
      id: 4,
      afbeelding: "assets/imgs/Destillatatieopzetstuk.png",
      name: "Destillatatieopzetstuk",
      soort: null
    },
    {
      id: 5,
      afbeelding: "assets/imgs/Erlenmeyer.png",
      name: "Erlenmeyer",
      soort: "kwal"
    },
    {
      id: 6,
      afbeelding: "assets/imgs/Filtreerpapier.png",
      name: "Filtreerpapier",
      soort: null 
    },
    {
      id: 7,
      afbeelding: "assets/imgs/GegradPipet.png",
      name: "GegradPipet",
      soort: null 
    },
    {
      id: 8,
      afbeelding: "assets/imgs/Klemburet.png",
      name: "Klemburet",
      soort: null 
    },
    {
      id: 9,
      afbeelding: "assets/imgs/Liebigkoeler.png",
      name: "Liebigkoeler",
      soort: null 
    },
    {
      id: 10,
      afbeelding: "assets/imgs/Maatbeker.png",
      name: "Maatbeker",
      soort: "kwal"
    },
    {
      id: 11,
      afbeelding: "assets/imgs/Maatcilinder.png",
      name: "Maatcilinder",
      soort: null 
    },
    {
      id: 12,
      afbeelding: "assets/imgs/Maatkolf.png",
      name: "Maatkolf",
      soort: "kwan"
    },
    {
      id: 13,
      afbeelding: "assets/imgs/Micropipet.png",
      name: "Micropipet",
      soort: null 
    },
    {
      id: 14,
      afbeelding: "assets/imgs/Ontwikkeltank.png",
      name: "Ontwikkeltank",
      soort: null 
    },
    {
      id: 15,
      afbeelding: "assets/imgs/Parafilm.png",
      name: "Parafilm",
      soort: null 
    },
    {
      id: 16,
      afbeelding: "assets/imgs/Pipetteerballon.png",
      name: "Pipetteerballon",
      soort: null 
    },
    {
      id: 17,
      afbeelding: "assets/imgs/Proefbuisrek.png",
      name: "Proefbuisrek",
      soort: null 
    },
    {
      id: 18,
      afbeelding: "assets/imgs/Reageerbuis.png",
      name: "Reageerbuis",
      soort: "kwal" 
    },
    {
      id: 19,
      afbeelding: "assets/imgs/Rondbodemkolf.png",
      name: "Rondbodemkolf",
      soort: null 
    },
    {
      id: 20,
      afbeelding: "assets/imgs/Silicagelplaat.png",
      name: "Silicagelplaat",
      soort: null 
    },
    {
      id: 21,
      afbeelding: "assets/imgs/Spuitfles.png",
      name: "Spuitfles",
      soort: null 
    },
    {
      id: 22,
      afbeelding: "assets/imgs/Statief.png",
      name: "Statief",
      soort: null 
    },
    {
      id: 23,
      afbeelding: "assets/imgs/ThermometerDes.jpg",
      name: "ThermometerDes",
      soort: null 
    },
    {
      id: 24,
      afbeelding: "assets/imgs/Trechter.png",
      name: "Trechter",
      soort: null 
    },
    {
      id: 25,
      afbeelding: "assets/imgs/Volpipet.png",
      name: "Volpipet",
      soort: "kwan" 
    },
    {
      id: 26,
      afbeelding: "assets/imgs/Waterslang.png",
      name: "Waterslang",
      soort: null 
    },
    {
      id: 27,
      afbeelding: "assets/imgs/Zuurkast.png",
      name: "Zuurkast",
      soort: null 
    }
  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public prov: ProvDataProvider) {
    
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
