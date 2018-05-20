import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplitterPage } from '../splitter/splitter';
import { AlertController } from 'ionic-angular';

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
  
  // Logic om alle open labo's binnen te trekken uit json-file
  openLabos : any = [
    {
      laboNaam: "Labo 1",
      inleverDatum: "22/05/18",
      oefeningen: 
      [
        {
          oefeningNaam: "Maken van een oplossing",
          templates: 
          [
            {
              soort: "kkTemplateOefening"
            }, 
            {
              soort: "materialTemplate",
              uitleg: "Het is hier de bedoeling dat je de juiste materialen op tafel sleept om een oplossing toe te passen",
              hint: "om een oplossing te maken ga je kwantitatief te werk",
              juisteMaterialen: [12,21,24,15,1]
            },
            {
              soort: "werkwijzeTemplate",
              lijsten: [
                {
                  lijstNaam: "Goed Oplosbaar",
                  stappen: [
                    {
                      id: 1,
                      step: 'Weeg de gewenste hoeveelheid poeder af.',
                      midsteps: null
                    },
                    {
                      id: 2,
                      step: 'Spoel de maatkolf met gedestilleerd water.',
                      midsteps: null
                    },
                    {
                      id: 3,
                      step: 'Plaats een droge trechter op de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 4,
                      step: 'Breng het poeder in de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 5,
                      step: 'Spoel het weegrecipiënt grondig na.',
                      midsteps: null
                    },
                    {
                      id: 6,
                      step: 'Vul de maatkolf ongeveer voor de helft met het oplosmiddel.',
                      midsteps: null
                    },
                    {
                      id: 7,
                      step: 'Laat de vaste stof oplossen door de kolf om te zwenken.',
                      midsteps: null
                    },
                    {
                      id: 8,
                      step: 'Als alles is opgelost mag de maatkolf worden aangevuld met spuitfles tot aan de meniscus.',
                      midsteps: null
                    },
                    {
                      id: 9,
                      step: 'Plaats parafilm op de maatkolf en homogeniseer door om te zwenken.',
                      midsteps: null
                    }
                  ]
                },
                {
                  lijstNaam: "Slecht Oplosbaar",
                  stappen: [
                    {
                      id: 1,
                      step: 'Weeg de gewenste hoeveelheid poeder af.',
                      midsteps: null
                    },
                    {
                      id: 2,
                      step: 'Spoel de maatbeker met gedestilleerd water.',
                      midsteps: null
                    },
                    {
                      id: 3,
                      step: 'Breng het poeder in een beker.',
                      midsteps: null
                    },
                    {
                      id: 4,
                      step: 'Voeg oplosmiddel toe.',
                      midsteps: null
                    },
                    {
                      id: 5,
                      step: 'Als het poeder is opgelost, breng deze oplossing over in de maatkolf eventueel adhv een trechter.',
                      midsteps: null
                    },
                    {
                      id: 6,
                      step: 'Leng aan met spuitfles tot aan de meniscus.',
                      midsteps: null
                    },
                    {
                      id: 7,
                      step: 'Plaats parafilm op de maatkolf en homogeniseer door om te zwenken.',
                      midsteps: null
                    }
                  ]
                }
              ],
              hint: "poeder – oplossen – aanvullen"
            },
            {
              soort: "verwijzingstemplate",
              uitleg: "Klik op onderstaande link om naar de leerstof te gaan",
              link: "http://www.google.com"
            }
          ]
        },
        {
          oefeningNaam: "Oplossing maken van NaCl",
          templates: [
            {
              soort: "werkwijzeTemplate",
              lijsten: [
                {
                  lijstNaam: "Maak een 100 ml NaCl (MM: 58,4 g/mol) oplossing met concentratie 0,1M.",
                  stappen: [
                    {
                      id: 1,
                      step: 'Weeg de gewenste hoeveelheid poeder af op de correcte balans.',
                      midsteps: [
                        {
                          step: "Vraag 1 bij het afwegen van het poeder",
                          question: "Hoeveel poeder werd er afgewogen (in gram)",
                          answer: "0,584"
                        },
                        {
                          step: "Vraag 2 bij het afwegen van het poeder",
                          question: "Maakte je gebruik van een BOVENWEGER of een ANALYTISCHE BALANS? (geef jouw antwoord in zoals in de vraag)",
                          answer: "ANALYTISCHE BALANS"
                        },
                        {
                          step: "Vraag 3 bij het afwegen van het poeder",
                          question: "Is NaCl goed of slecht oplosbaar? (JA of NEEN)",
                          answer: "JA"
                        }
                      ]
                    },
                    {
                      id: 2,
                      step: 'Spoel de maatkolf met gedestilleerd water.',
                      midsteps: null
                    },
                    {
                      id: 3,
                      step: 'Plaats een droge trechter op de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 4,
                      step: 'Breng het poeder in de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 5,
                      step: 'Spoel het weegrecipiënt grondig na.',
                      midsteps: null
                    },
                    {
                      id: 6,
                      step: 'Vul de maatkolf ongeveer voor de helft met het oplosmiddel.',
                      midsteps: null
                    },
                    {
                      id: 7,
                      step: 'Laat de vaste stof oplossen door de kolf om te zwenken.',
                      midsteps: null
                    },
                    {
                      id: 8,
                      step: 'Als alles is opgelost mag de maatkolf worden aangevuld met spuitfles tot aan de meniscus.',
                      midsteps: null
                    },
                    {
                      id: 9,
                      step: 'Plaats parafilm op de maatkolf en homogeniseer door om te zwenken.',
                      midsteps: null
                    }
                  ]
                }
              ],
              hint: "m = n . MM en n = C . V  /  om een oplossing te maken ga je kwantitatief te werk.  /  zoek de oplosbaarheid op van NaCl."
            },
            {
              soort: "verwijzingstemplate",
              uitleg: "Meet de geleidbaarheid met de geleidbaarheidsmeter door volgende link te gebruiken",
              link: "https://ehb.instructure.com/courses/4446/files/folder/Kwaliteitszorg%20in%20het%20labo/SOP's"
            },
            {
              soort: "afvalTemplate",
              stoffen: [
                {
                  id: 1,
                  naam: "NaCl-oplossing",
                  afval: 7
                }
              ],
              uitleg: "Het is hierbij de bedoeling dat je alle soorten afval in de juiste vuilbak zet",
              hint: "Raadpleeg het afvalverwerkingsdocument"
            }
          ]
        }
      ]
    },
    {
      laboNaam: "Labo 2",
      inleverDatum: "30/05/18",
      oefeningen: [
        {
          oefeningNaam: "Enkel KKTemplateOefening",
          templates: 
          [
            {
              soort: "kkTemplateOefening"
            }
          ]
        },
        {
          oefeningNaam: "Enkel MaterialTemplateOefening",
          templates: 
          [
            {
              soort: "materialTemplate",
              uitleg: "Het is hier de bedoeling dat je de juiste materialen op tafel sleept om een filtratie toe te passen",
              hint: "Je moet gewoon slepen",
              juisteMaterialen: [1,2,3]
            }
          ]
        },
        {
          oefeningNaam: "Enkel VerwijzingsTemplateOefening",
          templates: 
          [
            {
              soort: "verwijzingstemplate",
              uitleg: "Klik op onderstaande link om naar de leerstof te gaan",
              link: "http://www.google.com"
            }
          ]
        },
        {
          oefeningNaam: "Enkel AfvalTemplateOefening",
          templates: 
          [
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
          oefeningNaam: "Enkel WerkwijzeTemplateOefening",
          templates:
          [
            {
              soort: "werkwijzeTemplate",
              lijsten: [
                {
                  lijstNaam: "Goed Oplosbaar",
                  stappen: [
                    {
                      id: 1,
                      step: 'Weeg de gewenste hoeveelheid poeder af.',
                      midsteps: null
                    },
                    {
                      id: 2,
                      step: 'Spoel de maatkolf met gedestilleerd water.',
                      midsteps: null
                    },
                    {
                      id: 3,
                      step: 'Plaats een droge trechter op de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 4,
                      step: 'Breng het poeder in de maatkolf.',
                      midsteps: null
                    },
                    {
                      id: 5,
                      step: 'Spoel het weegrecipiënt grondig na.',
                      midsteps: null
                    },
                    {
                      id: 6,
                      step: 'Vul de maatkolf ongeveer voor de helft met het oplosmiddel.',
                      midsteps: null
                    },
                    {
                      id: 7,
                      step: 'Laat de vaste stof oplossen door de kolf om te zwenken.',
                      midsteps: null
                    },
                    {
                      id: 8,
                      step: 'Als alles is opgelost mag de maatkolf worden aangevuld met spuitfles tot aan de meniscus.',
                      midsteps: null
                    },
                    {
                      id: 9,
                      step: 'Plaats parafilm op de maatkolf en homogeniseer door om te zwenken.',
                      midsteps: null
                    }
                  ]
                },
                {
                  lijstNaam: "Slecht Oplosbaar",
                  stappen: [
                    {
                      id: 1,
                      step: 'Weeg de gewenste hoeveelheid poeder af.',
                      midsteps: null
                    },
                    {
                      id: 2,
                      step: 'Spoel de maatbeker met gedestilleerd water.',
                      midsteps: null
                    },
                    {
                      id: 3,
                      step: 'Breng het poeder in een beker.',
                      midsteps: null
                    },
                    {
                      id: 4,
                      step: 'Voeg oplosmiddel toe.',
                      midsteps: null
                    },
                    {
                      id: 5,
                      step: 'Als het poeder is opgelost, breng deze oplossing over in de maatkolf eventueel adhv een trechter.',
                      midsteps: null
                    },
                    {
                      id: 6,
                      step: 'Leng aan met spuitfles tot aan de meniscus.',
                      midsteps: null
                    },
                    {
                      id: 7,
                      step: 'Plaats parafilm op de maatkolf en homogeniseer door om te zwenken.',
                      midsteps: null
                    }
                  ]
                }
              ],
              hint: "poeder – oplossen – aanvullen"
            }
          ]
        }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
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
