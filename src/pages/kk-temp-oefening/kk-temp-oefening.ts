import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

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

  userId: number;
  exerciseId: number;

  AllMaterials: any;

  // Templates vanuit de splitterPage
  templates: any = [];
  hint: any;

  aantalKeerFout : number = 0;

  kwanMaterials: any = [];
  kwalMaterials: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService, public prov: ProvDataProvider) {
    this.templates = navParams.data.templates;

    this.hint = "kwantitatief is zeer nauwkeurig, analytisch glaswerk om bv. een concentratie te bepalen. Kwalitatief glaswerk is minder nauwkeurig, niet analytisch glaswerk om bv. een identificatiereactie (om na te gaan welke stof aanwezig is) uit te voeren.";

    this.dragulaService.drop.subscribe((val) =>
    {
        console.log('Item Moved');
    });

    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllMaterials = data.materialen;

      // Filter om te zien welke materialen iets te maken hebben met kwantitatief of kwalitatief
      for (var i=0; i<this.AllMaterials.length; i++){
        if(this.AllMaterials[i].soort == undefined){
          this.AllMaterials.splice(i, 1);
          i--;
        }
      }

      this.shuffle(this.AllMaterials);
    });

    this.userId = this.navParams.data.userId;
    this.exerciseId = this.navParams.data.exerciseId;
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

        // POST van een ban op de oefening van de gebruiker in de JSON-file
        // Waarden die meegegeven worden:
        // - userId
        // - oefeningId
        // - eindeBan

        // In JSON-file wordt in dit geval het volgende ingevoerd:
        // - id: ...
        // - naam: "..."
        // - email: "..."
        // - completions: ...
        // - bans: [
        //  {
        //     "oefeningId": ...
        //     "eindeVanBan": ...      
        //  }
        // ]

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
