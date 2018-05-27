import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth'

/**
 * Generated class for the HermaakOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hermaak-oefening',
  templateUrl: 'hermaak-oefening.html',
})
export class HermaakOefeningPage {

  email: string;
  AllLabos : any; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public prov: ProvDataProvider, public loadingCtrl: LoadingController, private fire: AngularFireAuth) {
    let temp = this.prov.getAllLabos();
    temp.subscribe(data => {
      this.AllLabos = data;

      // Filter om te zien welke oefeningen er moeten weergegeven worden a.d.h.v. datum
      for (var i=0; i<this.AllLabos.length; i++){
        if(new Date(this.AllLabos[i].eindDatum).getTime() - new Date().getTime() >= 0){
          this.AllLabos.splice(i, 1);
          i--;
        }
      }
      console.log(this.AllLabos);
    });
    this.email = this.fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    this.toonLoading();
  }

  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even geduld...",
      duration: 1000
    });
    loader.present();
  }

  showConfirm(oefening) {
    let confirm = this.alertCtrl.create({
      title: 'Bent u zeker?',
      message: 'U kunt niet terug naar het menu indien u deze oefening start!',
      buttons: [
        {
          text: 'Neen',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ja',
          handler: () => {
            console.log('Agree clicked');
            this.openOefening(oefening);
          }
        }
      ]
    });
    confirm.present();
  }

  openOefening(oefening){
    this.navCtrl.setRoot(SplitterPage, {
      templates: oefening.templates
    });
  }
}
