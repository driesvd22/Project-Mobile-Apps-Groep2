import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';

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

  test: String;

  // Logic om alle open labo's binnen te trekken uit json-file
  openLabos : any = [
    {
      laboNaam: "Labo 1",
      inleverDatum: "22/05/18",
      oefeningen: 
      [
        {
          oefeningNaam: "Oefening 1",
          templates: 
          [
            {
              soort: "kkTemplateOefening"
            }, 
            {
              soort: "materialTemplate",
              uitleg: "Het is hier de bedoeling dat je de juiste materialen op tafel sleept om een filtratie toe te passen",
              hint: "Je moet gewoon slepen",
              juisteMaterialen: [1,2,3]
            },
            {
              soort: "verwijzingstemplate",
              uitleg: "Klik op onderstaande link om naar de leerstof te gaan",
              link: "http://www.google.com"
            },
            {
              soort: "afvalTemplate",
              stoffen: [
                {
                  id: 1,
                  naam: "Zout",
                  afval: 1
                },
                {
                  id: 2,
                  naam: "Peper",
                  afval: 1
                },
                {
                  id: 3,
                  naam: "Water",
                  afval: 7
                },
                {
                  id: 4,
                  naam: "Giftige stof",
                  afval: 6
                }
              ],
              uitleg: "Het is hierbij de bedoeling dat je alle soorten afval in de juiste vuilbak zet",
              hint: "Let goed voor de giftige stof!"
            }
          ]
        },
        {
          oefeningNaam: "Oefening 2",
          templates: 
          [
            {
              soort: "werkwijzeTemplate",
              stappen: [
                {
                  id: 1,
                  step: 'Dit is stap 1',
                  midsteps: [
                    {
                      step: "Dit is de tussenstap 1 van stap 1",
                      question: "Dit is de vraag",
                      answer: "juist"
                    },
                    {
                      step: "Dit is de tussenstap 2 van stap 1",
                      question: "Dit is de tweede vraag",
                      answer: "juist"
                    }
                  ]
                },
                {
                  id: 2,
                  step: 'Dit is stap 2',
                  midsteps: null
                },
                {
                  id: 3,
                  step: 'Dit is stap 3',
                  midsteps: null
                },
                {
                  id: 4,
                  step: 'Dit is stap 4',
                  midsteps: null
                }
              ],
              hint: "Zet het in de juiste volgorde"
            }
          ]
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
