import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';

/**
 * Generated class for the KkTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kk-temp-oefening',
  templateUrl: 'kk-temp-oefening.html',
})
export class KkTempOefeningPage {

  // Templates vanuit de splitterPage
  templates: any = [];
  hint: any;

  aantalKeerFout : number = 0;

  // Logic om alle (nodige) materialen op het halen
  kkMaterials : any = [
    {
      id: 1,
      name: 'Maatkolf',
      afbeelding: 'assets/imgs/Maatkolf.png',
      soort: 'kwan'
    },
    {
      id: 2,
      name: 'Volpipet',
      afbeelding: 'assets/imgs/Volpipet.png',
      soort: 'kwan'
    },
    { 
      id: 3,
      name: 'Buret',
      afbeelding: 'assets/imgs/Buret.png',
      soort: 'kwan'
    },
    {
      id: 4,
      name: 'Analytische balans',
      afbeelding: 'assets/imgs/AnalytischBalans.png',
      soort: 'kwan'
    },
    { 
      id: 5,
      name: 'Maatbeker',
      afbeelding: 'assets/imgs/Maatbeker.png',
      soort: 'kwal'
    },
    { 
      id: 6,
      name: 'Erlenmeyer',
      afbeelding: 'assets/imgs/Erlenmeyer.png',
      soort: 'kwal'
    },
    { 
      id: 7,
      name: 'Reageerbuis',
      afbeelding: 'assets/imgs/Reageerbuis.png',
      soort: 'kwal'
    },
    { 
      id: 8,
      name: 'Bovenweger',
      afbeelding: 'assets/imgs/Bovenweger.png',
      soort: 'kwal'
    }
  ];

  kwanMaterials: any = [];
  kwalMaterials: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    this.templates = navParams.data.templates;
    this.shuffle(this.kkMaterials);

    this.hint = "kwantitatief is zeer nauwkeurig, analytisch glaswerk om bv. een concentratie te bepalen. Kwalitatief glaswerk is minder nauwkeurig, niet analytisch glaswerk om bv. een identificatiereactie (om na te gaan welke stof aanwezig is) uit te voeren.";

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
    console.log('ionViewDidLoad KkTempOefeningPage');
  }

  /**
    * Shuffles array in place. ES6 version
    * items An array containing the items.
  */
 shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

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
    let ok: boolean = true;

    if(this.kkMaterials.length == 0){
      for (let material of this.kwanMaterials){
        if(!(material.soort == "kwan")){
          ok = false;
        }
      }
      for (let material of this.kwalMaterials){
        if(!(material.soort == "kwal")){
          ok = false;
        }
      }
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
