import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { LoginPage } from '../login/login';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MidStepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mid-step',
  templateUrl: 'mid-step.html',
})
export class MidStepPage {
  
  userId: number;
  oefeningId: number;
  email: string;
  
  aantalKeerFout: any = 0;
  templates: any = [];
  steps: any = [];
  allMidSteps: any = [];
  answersByUser: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, public prov: ProvDataProvider, private fire: AngularFireAuth) {
    this.templates = navParams.data.templates;
    this.steps = navParams.data.steps;
    this.userId = this.navParams.data.userId;
    this.oefeningId = this.navParams.data.oefeningId;
    this.email = this.fire.auth.currentUser.email;

    for (let i=0; i<this.steps.length; i++){
      if(this.steps[i].midsteps != null){
        for(let y=0; y<this.steps[i].midsteps.length; y++){
          this.allMidSteps.push(this.steps[i].midsteps[y]);
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log(this.allMidSteps);
  }

  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
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
      subTitle: 'Nog niet geweten of hier een hint moet',
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
    console.log(this.answersByUser);
    
    let ok: boolean = true;

    for(let i=0; i<this.allMidSteps.length; i++){
      if(!(this.allMidSteps[i].answer == this.answersByUser[i])){
        ok = false;
      }
    }
    
    if(ok){
      this.showAlertJuist();

      this.templates.shift();

      this.navCtrl.setRoot(SplitterPage, {
        templates: this.templates,
        oefeningId: this.oefeningId
      });
    }
    else{
      this.aantalKeerFout++;

      if(this.aantalKeerFout >= 5){
        this.showAlertBan();

        let temp = this.prov.getAllUsers();
        temp.subscribe(data => {
          var Allgebruikers = data;
          var userId

          Allgebruikers.forEach(gebruiker => {
            if(this.email == gebruiker.email){
              userId = gebruiker.id;
            }
          });

          console.log("POST van een ban");
          console.log(userId);
          console.log(this.oefeningId);
          var uur = new Date().getUTCHours();
          console.log(new Date().setUTCHours(uur + 1).toString());

          this.prov.postNewBan(userId, this.oefeningId, new Date().setUTCHours(uur + 1).toString());

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
        })

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
