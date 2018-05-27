import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { AlertController } from 'ionic-angular';
import { ProvDataProvider } from '../../providers/prov-data/prov-data';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth'

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
  
  email: String;

  erIsEenBan: boolean = false;
  
  AllLabos : any
  AllGebruikers: any;
  indexOfUser: number;
  CompletionsOfUser: any;
  BansOfUser: any;

  BansForView: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public prov: ProvDataProvider, public loadingCtrl: LoadingController, private fire: AngularFireAuth) {
    
    this.email = this.fire.auth.currentUser.email;

    let labos = this.prov.getAllLabos()
    let users = this.prov.getAllUsers();
    
    labos.subscribe(labos => {
      users.subscribe(users => {
        this.AllLabos = labos;
        this.AllGebruikers = users;

        for (var x=0; x<this.AllGebruikers.length; x++){

          if(this.AllGebruikers[x].email == this.email){
            this.indexOfUser = x;
          }
        }

        // Ophalen van CompletionsOfUser
        this.CompletionsOfUser = this.AllGebruikers[this.indexOfUser].completions;
        // Ophalen van BansOfUser
        this.BansOfUser = this.AllGebruikers[this.indexOfUser].bans;

        // Filter om te zien welke oefeningen er moeten weergegeven worden a.d.h.v. datum
        for (var i = 0; i<this.AllLabos.length; i++){
          
          //HARDCODE
          if(new Date(this.AllLabos[i].eindDatum).getTime() - new Date().getTime() <= 0){
            this.AllLabos.splice(i, 1);
            i--;
          }
          else{
            var allCompleted: boolean = true;
            for (var t = 0; t < this.AllLabos[i].oefeningen.length; t++){
              for (var u = 0; u < this.CompletionsOfUser.length; u++){
                if(this.CompletionsOfUser[u] == this.AllLabos[i].oefeningen[t].oefeningId){
                  allCompleted = true;
                  u = this.CompletionsOfUser.length - 1;
                }
                else {
                  allCompleted = false;
                }
              }
            }
          }
        }

        // Fiters voor weergave van de oefeningen afhankelijk van de gebruiker
        for (var y = 0; y<this.AllLabos.length; y++){
          for( var z = 0; z<this.AllLabos[y].oefeningen.length; z++){
            
            // Nagaan of oefening completed is
            if(this.CompletionsOfUser.includes(this.AllLabos[y].oefeningen[z].oefeningId)){
              console.log(this.AllLabos[y].oefeningen[z].exerciseNaam + " is completed en mag dus weg");
              this.AllLabos[y].oefeningen.splice(z, 1);
              z--;
            }
            // Nagaan of oefening geband is
            else{
              var banOk: boolean = true;
              for(var n = 0; n < this.BansOfUser.length; n++){
                if(this.BansOfUser[n].oefeningId == this.AllLabos[y].oefeningen[z].oefeningId){
                  if(this.BansOfUser[n].eindeVanBan - new Date().getTime() >= 0){
                    banOk = false;
                  }
                }
              }
              if(!banOk){
                console.log("Ban van " + this.AllLabos[y].oefeningen[z].exerciseNaam + " waardoor oefening die hier achter komen ook verwijnen");
                while (this.AllLabos[y].oefeningen.length > z+1){
                  this.AllLabos[y].oefeningen.pop();
                }
                this.AllLabos[y].oefeningen.splice(z, 1);
                z--;
              }
              // oefening is niet geband
              else{
                console.log(this.AllLabos[y].oefeningen[z].exerciseNaam + " is de volgende oefening die gemaakt moet worden, dus de volgende oefening moeten weg");
                while (this.AllLabos[y].oefeningen.length > z+1){
                  this.AllLabos[y].oefeningen.pop();
                }
              }
            }
          }
        }
      })
    })
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
      templates: oefening.templates,
      oefeningId: oefening.oefeningId
    });
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
}
