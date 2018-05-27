import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatTempOefeningPage } from '../mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../verwijzings-temp-oefening/verwijzings-temp-oefening';
import { HomePage } from '../home/home';
import { KkTempOefeningPage } from '../kk-temp-oefening/kk-temp-oefening';
import { AfvalTempOefeningPage } from '../afval-temp-oefening/afval-temp-oefening';
import { ChooseListPage } from '../choose-list/choose-list';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SplitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splitter',
  templateUrl: 'splitter.html',
})
export class SplitterPage {

  userId: number;
  oefeningId: number;
  email: string;
  
  templates: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public prov: ProvDataProvider, private fire: AngularFireAuth) {
    this.templates = navParams.data.templates;
    this.userId = this.navParams.data.userId;
    this.oefeningId = this.navParams.data.oefeningId;
    this.email = this.fire.auth.currentUser.email;
  }

  ionViewDidLoad() {

    console.log(this.oefeningId);
    
    if(this.templates == null){
      console.log("ok");
          let temp = this.prov.getAllUsers();
          temp.subscribe(data => {
            var Allgebruikers = data;
            var userId
  
            Allgebruikers.forEach(gebruiker => {
              if(this.email == gebruiker.email){
                userId = gebruiker.id;
              }
            });
  
            console.log("POST van een Completion");
            console.log(userId);
            console.log(this.oefeningId);

            this.prov.postNewCompletion(userId, this.oefeningId);
  
            //COMPLETION
          
            // POST van een nieuwe completion in de JSON-file
            // Waarden die meegegeven worden:
            // - userId
            // - oefeningId

            // In JSON-file wordt in dit geval het volgende ingevoerd:
            // - id: ...
            // - naam: "..."
            // - email: "..."
            // - completions: [1] (de exerciceId komt hier)
            // - bans: ...
          })

          this.navCtrl.setRoot(HomePage);
    }
    
    else if(this.templates.length == 0){
      console.log("ok");
          let temp = this.prov.getAllUsers();
          temp.subscribe(data => {
            var Allgebruikers = data;
            var userId
  
            Allgebruikers.forEach(gebruiker => {
              if(this.email == gebruiker.email){
                userId = gebruiker.id;
              }
            });
  
            console.log("POST van een Completion");
            console.log(userId);
            console.log(this.oefeningId);

            this.prov.postNewCompletion(userId, this.oefeningId);
  
            //COMPLETION
          
            // POST van een nieuwe completion in de JSON-file
            // Waarden die meegegeven worden:
            // - userId
            // - oefeningId

            // In JSON-file wordt in dit geval het volgende ingevoerd:
            // - id: ...
            // - naam: "..."
            // - email: "..."
            // - completions: [1] (de exerciceId komt hier)
            // - bans: ...
          })

          this.navCtrl.setRoot(HomePage);
    }
    
    else{
      switch(this.templates[0].soort){
        
        case "materialTemplate":{
          this.navCtrl.setRoot(MatTempOefeningPage, {
            templates: this.templates,
            userId: this.userId,
            oefeningId: this.oefeningId
          });
          break;
        }
        case "verwijzingstemplate":{
          this.navCtrl.setRoot(VerwijzingsTempOefeningPage, {
            templates: this.templates,
            userId: this.userId,
            oefeningId: this.oefeningId
          });
          break;
        }
        case "kkTemplateOefening":{
          this.navCtrl.setRoot(KkTempOefeningPage, {
            templates: this.templates,
            userId: this.userId,
            oefeningId: this.oefeningId
          });
          break;
        }
        case "afvalTemplate":{
          this.navCtrl.setRoot(AfvalTempOefeningPage, {
            templates: this.templates,
            userId: this.userId,
            oefeningId: this.oefeningId
          });
          break;
        }
        case "werkwijzeTemplate":{
          this.navCtrl.setRoot(ChooseListPage, {
            templates: this.templates,
            userId: this.userId,
            oefeningId: this.oefeningId
          });
          break;
        }
        default:{
          console.log("ok");
          let temp = this.prov.getAllUsers();
          temp.subscribe(data => {
            var Allgebruikers = data;
            var userId
  
            Allgebruikers.forEach(gebruiker => {
              if(this.email == gebruiker.email){
                userId = gebruiker.id;
              }
            });
  
            console.log("POST van een Completion");
            console.log(userId);
            console.log(this.oefeningId);

            this.prov.postNewCompletion(userId, this.oefeningId);
  
            //COMPLETION
          
            // POST van een nieuwe completion in de JSON-file
            // Waarden die meegegeven worden:
            // - userId
            // - oefeningId

            // In JSON-file wordt in dit geval het volgende ingevoerd:
            // - id: ...
            // - naam: "..."
            // - email: "..."
            // - completions: [1] (de exerciceId komt hier)
            // - bans: ...
          })

          this.navCtrl.setRoot(HomePage);
        }
      }
      
    }
    
  }
}
