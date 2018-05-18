import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HermaakOefeningPage } from '../hermaak-oefening/hermaak-oefening';
import { SplitterPage } from '../splitter/splitter';


/**
 * Generated class for the VerwijzingsTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verwijzings-temp-oefening',
  templateUrl: 'verwijzings-temp-oefening.html',
})
export class VerwijzingsTempOefeningPage {


  templates: any = [];

  uitleg: any;
  link: any;

  // Logic om uitleg en link te gaan ophalen
  //uitleg: String = "Dit is de uitleg die de docent meegeeft";
  //link: String="https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
    this.templates = navParams.data.templates;
    
    this.uitleg = this.templates[0].uitleg;
    this.link = this.templates[0].link;
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
    console.log('ionViewDidLoad VerwijzingsTempOefeningPage');
  }

  goBack(){
    this.templates.shift();
    this.navCtrl.setRoot(SplitterPage, {
      templates: this.templates
    });
  }
}
