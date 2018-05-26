import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { AngularFireAuth} from 'angularfire2/auth'

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

  body = new EventEmitter();

  email: string;
  exerciseId: number;

  // Templates vanuit de splitterPage
  templates: any = [];
  uitleg: any;
  hint: any;
  juisteMaterialen: any = [];
  
  // De tweede div waar de antwoorden in worden geplaatst
  q2: any = [];

  aantalKeerFout : number = 0;

  AllMaterials: any = [
    {
      id: 1,
      afbeelding: "assets/imgs/AnalytischBalans.png",
      name: "Analytisch Balans",
      soort: null
    },
    {
      id: 2,
      afbeelding: "assets/imgs/Bovenweger.png",
      name: "Bovenweger",
      soort: null 
    },
    {
      id: 3,
      afbeelding: "assets/imgs/Buret.png",
      name: "Buret",
      soort: null 
    },
    {
      id: 4,
      afbeelding: "assets/imgs/Destillatatieopzetstuk.png",
      name: "Destillatatieopzetstuk",
      soort: null 
    },
    {
      id: 5,
      afbeelding: "assets/imgs/Erlenmeyer.png",
      name: "Erlenmeyer",
      soort: null 
    },
    {
      id: 6,
      afbeelding: "assets/imgs/Filtreerpapier.png",
      name: "Filtreerpapier",
      soort: null 
    },
    {
      id: 7,
      afbeelding: "assets/imgs/GegradPipet.png",
      name: "GegradPipet",
      soort: null 
    },
    {
      id: 8,
      afbeelding: "assets/imgs/Klemburet.png",
      name: "Klemburet",
      soort: null 
    },
    {
      id: 9,
      afbeelding: "assets/imgs/Liebigkoeler.png",
      name: "Liebigkoeler",
      soort: null 
    },
    {
      id: 10,
      afbeelding: "assets/imgs/Maatbeker.png",
      name: "Maatbeker",
      soort: null 
    },
    {
      id: 11,
      afbeelding: "assets/imgs/Maatcilinder.png",
      name: "Maatcilinder",
      soort: null 
    },
    {
      id: 12,
      afbeelding: "assets/imgs/Maatkolf.png",
      name: "Maatkolf",
      soort: null 
    },
    {
      id: 13,
      afbeelding: "assets/imgs/Micropipet.png",
      name: "Micropipet",
      soort: null 
    },
    {
      id: 14,
      afbeelding: "assets/imgs/Ontwikkeltank.png",
      name: "Ontwikkeltank",
      soort: null 
    },
    {
      id: 15,
      afbeelding: "assets/imgs/Parafilm.png",
      name: "Parafilm",
      soort: null 
    },
    {
      id: 16,
      afbeelding: "assets/imgs/Pipetteerballon.png",
      name: "Pipetteerballon",
      soort: null 
    },
    {
      id: 17,
      afbeelding: "assets/imgs/Proefbuisrek.png",
      name: "Proefbuisrek",
      soort: null 
    },
    {
      id: 18,
      afbeelding: "assets/imgs/Reageerbuis.png",
      name: "Reageerbuis",
      soort: null 
    },
    {
      id: 19,
      afbeelding: "assets/imgs/Rondbodemkolf.png",
      name: "Rondbodemkolf",
      soort: null 
    },
    {
      id: 20,
      afbeelding: "assets/imgs/Silicagelplaat.png",
      name: "Silicagelplaat",
      soort: null 
    },
    {
      id: 21,
      afbeelding: "assets/imgs/Spuitfles.png",
      name: "Spuitfles",
      soort: null 
    },
    {
      id: 22,
      afbeelding: "assets/imgs/Statief.png",
      name: "Statief",
      soort: null 
    },
    {
      id: 23,
      afbeelding: "assets/imgs/ThermometerDes.jpg",
      name: "ThermometerDes",
      soort: null 
    },
    {
      id: 24,
      afbeelding: "assets/imgs/Trechter.png",
      name: "Trechter",
      soort: null 
    },
    {
      id: 25,
      afbeelding: "assets/imgs/Volpipet.png",
      name: "Volpipet",
      soort: null 
    },
    {
      id: 26,
      afbeelding: "assets/imgs/Waterslang.png",
      name: "Waterslang",
      soort: null 
    },
    {
      id: 27,
      afbeelding: "assets/imgs/Zuurkast.png",
      name: "Zuurkast",
      soort: null 
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService, public prov: ProvDataProvider, private fire: AngularFireAuth) {
    
    this.templates = navParams.data.templates;

    this.uitleg = this.templates[0].uitleg;
    this.juisteMaterialen = this.templates[0].juisteMaterialen;
    this.hint = this.templates[0].hint;

    this.dragulaService.drop.subscribe((val) =>
    {
        console.log('Item Moved');
    });

    this.email = this.fire.auth.currentUser.email;
    this.exerciseId = this.navParams.data.exerciseId;
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
    let amountOfChoosenItems: number = this.q2.length;
    let amountOfJuisteMaterialen: number = this.juisteMaterialen.length;
    let ok: boolean = true;

    if(this.q2.length > 0){
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
      this.templates.shift();

      this.navCtrl.setRoot(SplitterPage, {
        templates: this.templates
      });
    }
    else{
      this.aantalKeerFout++;

      if(this.aantalKeerFout >= 5){
        this.showAlertBan();

        console.log("POST van een nieuwe ban");
        // POST van een ban op de oefening van de gebruiker in de JSON-file
        // Waarden die meegegeven worden:
        // - email
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
