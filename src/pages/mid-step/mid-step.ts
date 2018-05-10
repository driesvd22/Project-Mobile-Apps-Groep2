import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { LoginPage } from '../login/login';

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

  aantalKeerFout: any = 0;
  templates: any = [];
  steps: any = [];
  allMidSteps: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController) {
    this.templates = navParams.data.templates;
    this.steps = navParams.data.steps;

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
    let ok: boolean = true;

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
