import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';
import { MidStepPage } from '../mid-step/mid-step';

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

  templates: any = [];
  stappen: any = [];
  hint: any;

  aantalKeerFout : number = 0;

  stappenMetMidsteps: any = [];

  juisteVolgorde : any = [];

  gegevenVolgorde : any = [];

  gekozenVolgorde : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    this.templates = navParams.data.templates;
    this.stappen = this.templates[0].stappen;
    this.hint = this.templates[0].hint;

    this.stappen.forEach(stap => {
      this.juisteVolgorde.push(stap.id);
      
      if(!(stap.midsteps == null || stap.midsteps.length == 0)){
        this.stappenMetMidsteps.push(stap.midsteps);
      }
    });

    this.gegevenVolgorde = this.shuffle(this.stappen);

    dragulaService.drop.subscribe((value) => {
      console.log("Object moved");
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

      if(this.stappenMetMidsteps.length == 0 || this.stappenMetMidsteps == null){
        this.templates.shift();

        this.navCtrl.setRoot(SplitterPage, {
          templates: this.templates
        });
      }
      else {
        this.navCtrl.setRoot(MidStepPage, {
          templates: this.templates,
          steps: this.gekozenVolgorde
        });
      }
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
