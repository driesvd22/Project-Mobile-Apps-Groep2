import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';

/**
 * Generated class for the AfvalTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afval-temp-oefening',
  templateUrl: 'afval-temp-oefening.html',
})
export class AfvalTempOefeningPage {

  aantalKeerFout : number = 0;
  
  templates: any = [];
  uitleg: any;
  hint: any;

  stoffen: any = [];

  cat1: any = [];// id 1
  cat2: any = []; // id 2
  cat3: any = []; // id 3
  cat4: any = []; // id 4
  cat5: any = []; // id 5
  bruineFles: any = []; // id 6
  gootsteen: any = []; // id 7

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    
    this.templates = navParams.data.templates;
    this.stoffen = this.templates[0].stoffen;
    this.uitleg = this.templates[0].uitleg;
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
    // logic om hint te gaan ophalen afhankelijk van de tempID

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

    if(this.stoffen.length == 0){
      for (let stof of this.cat1){
        if(!(stof.afval == 1)){
          ok = false;
        }
      }
      for (let stof of this.cat2){
        if(!(stof.afval == 2)){
          ok = false;
        }
      }
      for (let stof of this.cat3){
        if(!(stof.afval == 3)){
          ok = false;
        }
      }
      for (let stof of this.cat4){
        if(!(stof.afval == 4)){
          ok = false;
        }
      }
      for (let stof of this.cat5){
        if(!(stof.afval == 5)){
          ok = false;
        }
      }
      for (let stof of this.bruineFles){
        if(!(stof.afval == 6)){
          ok = false;
        }
      }
      for (let stof of this.gootsteen){
        if(!(stof.afval == 7)){
          ok = false;
        }
      }
    }
    else {
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
        //
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
