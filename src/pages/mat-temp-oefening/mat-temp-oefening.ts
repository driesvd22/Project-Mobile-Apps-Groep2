import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';

/**
 * Generated class for the MatTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mat-temp-oefening',
  templateUrl: 'mat-temp-oefening.html',
})
export class MatTempOefeningPage {

  // Templates vanuit de splitterPage
  templates: any = [];
  uitleg: any;
  hint: any;
  juisteMaterialen: any = [];
  
  // De tweede div waar de antwoorden in worden geplaatst
  q2: any = [];

  aantalKeerFout : number = 0;

  // Logic om alle materialen op te halen
  AllMaterials : any = [
    {
      id: 1,
      name: 'Analytische Balans',
      afbeelding: '../../assets/imgs/AnalytischBalans.png'
    },
    {
      id: 2,
      name: 'Bovenweger',
      afbeelding: '../../assets/imgs/Bovenweger.png'
    },
    { 
      id: 3,
      name: 'Buret',
      afbeelding: '../../assets/imgs/Buret.png'
    },
    {
      id: 4,
      name: 'Destillatatieopzetstuk',
      afbeelding: '../../assets/imgs/Destillatatieopzetstuk.png'
    },
    { 
      id: 5,
      name: 'Erlenmeyer',
      afbeelding: '../../assets/imgs/Erlenmeyer.png'
    },
    { 
      id: 6,
      name: 'Filtreerpapier',
      afbeelding: '../../assets/imgs/Filtreerpapier.png'
    },
    { 
      id: 7,
      name: 'GegradPipet',
      afbeelding: '../../assets/imgs/GegradPipet.png'
    },
    { 
      id: 8,
      name: 'Klemburet',
      afbeelding: '../../assets/imgs/Klemburet.png'
    },
    { 
      id: 9,
      name: 'Liebigkoeler',
      afbeelding: '../../assets/imgs/Liebigkoeler.png'
    },
    { 
      id: 10,
      name: 'Maatbeker',
      afbeelding: '../../assets/imgs/Maatbeker.png'
    },
    { 
      id: 11,
      name: 'Maatcilinder',
      afbeelding: '../../assets/imgs/Maatcilinder.png'
    },
    { 
      id: 12,
      name: 'Maatkolf',
      afbeelding: '../../assets/imgs/Maatkolf.png'
    },
    { 
      id: 13,
      name: 'Micropipet',
      afbeelding: '../../assets/imgs/Micropipet.png'
    },
    { 
      id: 14,
      name: 'Ontwikkeltank',
      afbeelding: '../../assets/imgs/Ontwikkeltank.png'
    },
    { 
      id: 15,
      name: 'Parafilm',
      afbeelding: '../../assets/imgs/Parafilm.png'
    },
    { 
      id: 16,
      name: 'Pipetteerballon',
      afbeelding: '../../assets/imgs/Pipetteerballon.png'
    },
    { 
      id: 17,
      name: 'Proefbuisrek',
      afbeelding: '../../assets/imgs/Proefbuisrek.png'
    },
    { 
      id: 18,
      name: 'Reageerbuis',
      afbeelding: '../../assets/imgs/Reageerbuis.png'
    },
    { 
      id: 19,
      name: 'Rondbodemkolf',
      afbeelding: '../../assets/imgs/Rondbodemkolf.png'
    },
    { 
      id: 20,
      name: 'Silicagelplaat',
      afbeelding: '../../assets/imgs/Silicagelplaat.png'
    },
    { 
      id: 21,
      name: 'Spuitfles',
      afbeelding: '../../assets/imgs/Spuitfles.png'
    },
    { 
      id: 22,
      name: 'Statief',
      afbeelding: '../../assets/imgs/Statief.png'
    },
    { 
      id: 23,
      name: 'Thermometer Des',
      afbeelding: '../../assets/imgs/ThermometerDes.jpg'
    },
    { 
      id: 24,
      name: 'Trechter',
      afbeelding: '../../assets/imgs/Trechter.png'
    },
    { 
      id: 25,
      name: 'Volpipet',
      afbeelding: '../../assets/imgs/Volpipet.png'
    },
    { 
      id: 26,
      name: 'Waterslang',
      afbeelding: '../../assets/imgs/Waterslang.png'
    },
    { 
      id: 27,
      name: 'Zuurkast',
      afbeelding: '../../assets/imgs/Zuurkast.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    
    this.templates = navParams.data.templates;

    this.uitleg = this.templates[0].uitleg;
    this.juisteMaterialen = this.templates[0].juisteMaterialen;
    this.hint = this.templates[0].hint;

    this.dragulaService.drop.subscribe((val) =>
    {
        console.log('Item Moved');
    });
  }

  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log(this.templates);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Fout!',
      subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
      buttons: ['OK']
    });
    alert.present();
  }

  showHint() {
    let alert = this.alertCtrl.create({
      title: 'Hint',
      subTitle: this.hint,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertJuist(){
    let alert = this.alertCtrl.create({
      title: 'Juist!',
      subTitle: 'Dit is het juiste antwoord!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertBan(){
    let alert = this.alertCtrl.create({
      title: 'U bent geband uit het systeem',
      subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
      buttons: ['OK']
    });
    alert.present();
  }

  check(){
    
    let amountOfChoosenItems: number = this.q2.length;
    let amountOfJuisteMaterialen: number = this.juisteMaterialen.length;
    let ok: boolean = true;

    if(amountOfChoosenItems == amountOfJuisteMaterialen){
      
      for (let materiaal of this.q2) {
        if (!this.juisteMaterialen.find(x => x === materiaal.id)){
          ok = false;
        }
      };
    }
    else{
      ok = false;
    }

    if(ok){
      this.showAlertJuist();
      this.templates.shift();

      this.navCtrl.setRoot(SplitterPage, {
        templates: this.templates
      });
    }
    else{
      this.aantalKeerFout++;

      if(this.aantalKeerFout >= 5){
        this.showAlertBan();
        this.navCtrl.setRoot(LoginPage);
      }
      else if(this.aantalKeerFout >= 3){
        this.showHint();
      }
      else{
        this.showAlert();
      }
    }
  }
}
