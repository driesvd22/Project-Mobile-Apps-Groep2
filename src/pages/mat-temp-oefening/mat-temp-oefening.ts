import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SplitterPage } from '../splitter/splitter';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';

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

  userId: number;
  exerciseId: number;

  // Templates vanuit de splitterPage
  templates: any = [];
  uitleg: any;
  hint: any;
  juisteMaterialen: any = [];
  
  // De tweede div waar de antwoorden in worden geplaatst
  q2: any = [];

  aantalKeerFout : number = 0;

  AllMaterials : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public alertCtrl: AlertController, private dragulaService : DragulaService, public prov: ProvDataProvider) {
    
    this.templates = navParams.data.templates;

    this.uitleg = this.templates[0].uitleg;
    this.juisteMaterialen = this.templates[0].juisteMaterialen;
    this.hint = this.templates[0].hint;

    this.dragulaService.drop.subscribe((val) =>
    {
        console.log('Item Moved');
    });

    let temp = this.prov.getAllRemoteData();
    temp.subscribe(data => {
      this.AllMaterials = data.materialen;
    });

    this.userId = this.navParams.data.userId;
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
      this.templates.shift();

      this.navCtrl.setRoot(SplitterPage, {
        templates: this.templates
      });
    }
    else{
      this.aantalKeerFout++;

      if(this.aantalKeerFout >= 5){
        this.showAlertBan();

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
