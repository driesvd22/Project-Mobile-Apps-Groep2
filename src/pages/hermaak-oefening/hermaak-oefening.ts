import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { AfvalTempOefeningPage } from '../afval-temp-oefening/afval-temp-oefening';
import { AlertController } from 'ionic-angular';
import { WerkwijzeTempOefeningPage } from '../werkwijze-temp-oefening/werkwijze-temp-oefening';

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

  public RightMats;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    let RightMats: number[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HermaakOefeningPage');
  }

  showConfirm(pageName, tempID) {
    let confirm = this.alertCtrl.create({
      title: 'Are You Sure?',
      message: 'You can not go back when starting this exercise!',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(pageName, {
              tempID: tempID
            });
          }
        }
      ]
    });
    confirm.present();
  }

  openOefening(id){
    
    // Hier staat logic die bepaald welke template er gebruikt moet worden afhankelijk van de meegegeven ID:
    // materialTemplate = 1
    // verwijzingsTemplate = 2
    // afvalTemplate = 3
    // werkwijzeTemplate = 4

    // Hier staat de logic die de ID van de template bepaald (dit kan matTempID, verTempID, afvalTempID of werkTempID zijn)
    
    // Volgende gegevens zijn dummies vanuit deze logic:
    let temp = id; //Het soort template
    let tempID = 2; //De scecifieke id van de template

    switch(temp){
      case 1:{
        this.showConfirm(MatTempOefeningPage, tempID);
        break;
      }
      case 2:{
        this.showConfirm(VerwijzingsTempOefeningPage, tempID);
        break;
      }
      case 3:{
        this.showConfirm(AfvalTempOefeningPage, tempID);
        break;
      }
      case 4:{
        this.showConfirm(WerkwijzeTempOefeningPage, tempID);
        break;
      }
      default:{
        this.navCtrl.setRoot(HomePage);
      }

    }
  }

  checkWithRightMats(testMats: number[]){
    // logic om rightMats en testMats met elkaar te verglijken
    
    return true;
  }
}
