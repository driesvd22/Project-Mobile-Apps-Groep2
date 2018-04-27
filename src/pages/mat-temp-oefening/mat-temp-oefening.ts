import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

/**
 * Generated class for the MatTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mat-temp-oefening',
  templateUrl: 'mat-temp-oefening.html',
})
export class MatTempOefeningPage {

  q2: any = [];

  tempID: any;
  aantalKeerFout : number = 0;

  // Logic dat een array terug geeft met de ID's van de juiste materialen afhankelijk van en tempID
  juisteMaterialen = [1, 2];

  // Logic om alle materialen op te halen
  AllMaterials : any = [
    {
      id: 1,
      name: 'erlemeyer',
      afbeelding: '../../assets/imgs/erlemeyer.png'
    },
    {
      id: 2,
      name: 'logo',
      afbeelding: '../../assets/imgs/logo.png'
    },
    { 
      id: 3,
      name: 'erasmus_logo',
      afbeelding: '../../assets/imgs/erasmus_logo.jpg'
    },
    {
      id: 4,
      name: 'pasOp',
      afbeelding: '../../assets/imgs/pasOp.png'
    },
    { 
      id: 5,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 6,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 7,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 8,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 9,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 10,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 11,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 12,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    },
    { 
      id: 13,
      name: 'tandwiel',
      afbeelding: '../../assets/imgs/tandwiel.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService) {
    this.tempID = navParams.data.tempID;

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
    console.log('ionViewDidLoad MatTempOefeningPage');
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
    
    let amountOfChoosenItems: number = this.q2.length;
    let amountOfJuisteMaterialen: number = this.juisteMaterialen.length;
    let ok: boolean = true;

    console.log(this.juisteMaterialen);

    if(amountOfChoosenItems == amountOfJuisteMaterialen){
      
      for (let materiaal of this.q2) {
        if (!this.juisteMaterialen.find(x => x === materiaal.id)){
          ok = false;
        }
      };

    }
    else{
      ok = false;
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
