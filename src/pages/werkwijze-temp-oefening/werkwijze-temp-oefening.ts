import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

/**
 * Generated class for the WerkwijzeTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-werkwijze-temp-oefening',
  templateUrl: 'werkwijze-temp-oefening.html',
})
export class WerkwijzeTempOefeningPage {

  tempID: any;
  aantalKeerFout : number = 0;

  stappen : any = [
    {
      id: 1,
      step: 'Dit is stap 1',
      midsteps: [
        {
          step: "Dit is de tussenstap 1 van stap 1",
          question: "Dit is de vraag",
          answer: "juist"
        },
        {
          step: "Dit is de tussenstap 2 van stap 1",
          question: "Dit is de tweede vraag",
          answer: "juist"
        }
      ]
    },
    {
      id: 2,
      step: 'Dit is stap 2',
      midsteps: null
    },
    { 
      id: 3,
      step: 'Dit is stap 3',
      midsteps: null
    },
    {
      id: 4,
      step: 'Dit is stap 4',
      midsteps: null
    }
  ];

  juisteVolgorde : any = [];

  gegevenVolgorde : any = [];

  gekozenVolgorde : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    this.tempID = navParams.data.tempID;

    this.stappen.forEach(stap => {
      this.juisteVolgorde.push(stap.id);
    });

    this.gegevenVolgorde = this.shuffle(this.stappen);

    this.dragulaService.drop.subscribe((val) =>
    {
        console.log("Object Moved");
    });
  }

  getVolgorde(){
    this.stappen.forEach(stap => {
        this.juisteVolgorde.push(stap.id);      
    });
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

  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WerkwijzeTempOefeningPage');
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
    // logic om hint te gaan ophalen afhankelijk van de tempID
    let hint: any = "Dit is de hint";

    let alert = this.alertCtrl.create({
      title: 'Hint',
      subTitle: hint,
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

    let antwoord = [];

    this.gekozenVolgorde.forEach(stap => {
      antwoord.push(stap.id);
    });
    
    for (let i in this.juisteVolgorde) {
      if(antwoord[i] !== this.juisteVolgorde[i] || antwoord[i] == null){
        ok = false;
      }
    }

    if(ok){
      this.showAlertJuist();
      this.navCtrl.setRoot(HermaakOefeningPage);
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
