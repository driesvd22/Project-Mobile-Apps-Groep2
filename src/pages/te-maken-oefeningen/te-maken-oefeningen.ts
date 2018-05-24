import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { AlertController } from 'ionic-angular';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

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
  AllLabosFiter1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public prov: ProvDataProvider) {
    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllLabos = data.Labos;

      //console.log(new Date(this.AllLabos[1].eindDatum).getTime())
      console.log(new Date().getTime());

      //console.log(new Date(this.AllLabos[1].eindDatum).getTime() - new Date().getTime());

      for (var i=0; i<this.AllLabos.length; i++){

        console.log(new Date(this.AllLabos[i].eindDatum).getTime() - new Date().getTime());
        
        this.AllLabos.splice(i, 1);
        
        i++;
        /*
        if (new Date(this.AllLabos[i].eindDatum).getTime() - new Date().getTime() >= 0){
          console.log("if");
          i++;
        }
        else{
          console.log("else");
          this.AllLabos.splice(i, 1);
          i--;
        }
        */
      }

      console.log(this.AllLabos);

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
  }

}
