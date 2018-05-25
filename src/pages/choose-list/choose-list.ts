import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { WerkwijzeTempOefeningPage } from '../werkwijze-temp-oefening/werkwijze-temp-oefening';

/**
 * Generated class for the ChooseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-list',
  templateUrl: 'choose-list.html',
})
export class ChooseListPage {

  templates: any = [];
  lijsten: any = [];
  userId: number;
  exerciseId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
    this.templates = navParams.data.templates;

    this.lijsten = this.templates[0].lijsten;

    this.userId = this.navParams.data.userId;
    this.exerciseId = this.navParams.data.exerciseId;
  }

  ionViewDidLoad() {
    this.lijsten.forEach(lijst => {
      console.log(lijst);
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

  goToWerkwijzeTemplate(i){
    this.navCtrl.setRoot(WerkwijzeTempOefeningPage, {
      templates: this.templates,
      listIndex: i,
      userId: this.userId,
      exerciseId: this.exerciseId
    });
  }

}
