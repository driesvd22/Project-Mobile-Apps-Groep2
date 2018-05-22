import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FullMatPage } from '../full-mat/full-mat';

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

  // Logic om alle materialen op te halen
  AllMaterials : any = [
    {
      id: 1,
      name: 'Analytische Balans',
      afbeelding: 'assets/imgs/AnalytischBalans.png',
      soort: 'kwan'
    },
    {
      id: 2,
      name: 'Bovenweger',
      afbeelding: 'assets/imgs/Bovenweger.png',
      soort: 'kwal'
    },
    { 
      id: 3,
      name: 'Buret',
      afbeelding: 'assets/imgs/Buret.png',
      soort: 'kwan'
    },
    {
      id: 4,
      name: 'Destillatatieopzetstuk',
      afbeelding: 'assets/imgs/Destillatatieopzetstuk.png'
    },
    { 
      id: 5,
      name: 'Erlenmeyer',
      afbeelding: 'assets/imgs/Erlenmeyer.png',
      soort: 'kwal'
    },
    { 
      id: 6,
      name: 'Filtreerpapier',
      afbeelding: 'assets/imgs/Filtreerpapier.png'
    },
    { 
      id: 7,
      name: 'GegradPipet',
      afbeelding: 'assets/imgs/GegradPipet.png'
    },
    { 
      id: 8,
      name: 'Klemburet',
      afbeelding: 'assets/imgs/Klemburet.png'
    },
    { 
      id: 9,
      name: 'Liebigkoeler',
      afbeelding: 'assets/imgs/Liebigkoeler.png'
    },
    { 
      id: 10,
      name: 'Maatbeker',
      afbeelding: 'assets/imgs/Maatbeker.png',
      soort: 'kwal'
    },
    { 
      id: 11,
      name: 'Maatcilinder',
      afbeelding: 'assets/imgs/Maatcilinder.png'
    },
    { 
      id: 12,
      name: 'Maatkolf',
      afbeelding: 'assets/imgs/Maatkolf.png',
      soort: 'kwan'
    },
    { 
      id: 13,
      name: 'Micropipet',
      afbeelding: 'assets/imgs/Micropipet.png'
    },
    { 
      id: 14,
      name: 'Ontwikkeltank',
      afbeelding: 'assets/imgs/Ontwikkeltank.png'
    },
    { 
      id: 15,
      name: 'Parafilm',
      afbeelding: 'assets/imgs/Parafilm.png'
    },
    { 
      id: 16,
      name: 'Pipetteerballon',
      afbeelding: 'assets/imgs/Pipetteerballon.png'
    },
    { 
      id: 17,
      name: 'Proefbuisrek',
      afbeelding: 'assets/imgs/Proefbuisrek.png'
    },
    { 
      id: 18,
      name: 'Reageerbuis',
      afbeelding: 'assets/imgs/Reageerbuis.png',
      soort: 'kwal'
    },
    { 
      id: 19,
      name: 'Rondbodemkolf',
      afbeelding: 'assets/imgs/Rondbodemkolf.png'
    },
    { 
      id: 20,
      name: 'Silicagelplaat',
      afbeelding: 'assets/imgs/Silicagelplaat.png'
    },
    { 
      id: 21,
      name: 'Spuitfles',
      afbeelding: 'assets/imgs/Spuitfles.png'
    },
    { 
      id: 22,
      name: 'Statief',
      afbeelding: 'assets/imgs/Statief.png'
    },
    { 
      id: 23,
      name: 'Thermometer Des',
      afbeelding: 'assets/imgs/ThermometerDes.jpg'
    },
    { 
      id: 24,
      name: 'Trechter',
      afbeelding: 'assets/imgs/Trechter.png'
    },
    { 
      id: 25,
      name: 'Volpipet',
      afbeelding: 'assets/imgs/Volpipet.png',
      soort: 'kwan'
    },
    { 
      id: 26,
      name: 'Waterslang',
      afbeelding: 'assets/imgs/Waterslang.png'
    },
    { 
      id: 27,
      name: 'Zuurkast',
      afbeelding: 'assets/imgs/Zuurkast.png'
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
