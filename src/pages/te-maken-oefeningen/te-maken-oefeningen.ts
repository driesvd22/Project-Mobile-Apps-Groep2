import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { AlertController } from 'ionic-angular';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the TeMakenOefeningenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-te-maken-oefeningen',
  templateUrl: 'te-maken-oefeningen.html',
})
export class TeMakenOefeningenPage {

  userId: number;
  
  // Logic om alle open labo's binnen te trekken uit json-file
  AllLabos : any
  CompletionsOfUser: any;
  BansOfUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public prov: ProvDataProvider, public loadingCtrl: LoadingController) {
    
    let temp1 = this.prov.getAllRemoteData();
    
      let temp = this.prov.getAllRemoteData();
      temp.subscribe(data => {
        this.AllLabos = data.Labos;

        // Filter om te zien welke oefeningen er moeten weergegeven worden a.d.h.v. datum
        for (var i=0; i<this.AllLabos.length; i++){
          if(new Date(this.AllLabos[i].eindDatum).getTime() - new Date().getTime() <= 0){
            this.AllLabos.splice(i, 1);
            i--;
          }
          else{
            for (var y=0; y<this.AllLabos[i].oefeningen.length; y++){
            
          } 
        }
      }
    });
    
    this.userId = this.navParams.data.userId;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeMakenOefeningenPage');
    this.toonLoading();
  }

  toonLoading() {
    let loader = this.loadingCtrl.create({
      content: "Even geduld...",
      duration: 1000
    });
    loader.present();
  }

  checkIfUserIsBannedFromExercise(oefening){
    let temp1 = this.prov.getAllRemoteData();
    temp1.subscribe(data => {

      

    });
  }

}
