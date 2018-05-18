import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MaterialsPage } from '../pages/materials/materials';
import { TeMakenOefeningenPage } from '../pages/te-maken-oefeningen/te-maken-oefeningen';
import { HermaakOefeningPage } from '../pages/hermaak-oefening/hermaak-oefening';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { MatTempOefeningPage } from '../pages/mat-temp-oefening/mat-temp-oefening';
import { VerwijzingsTempOefeningPage } from '../pages/verwijzings-temp-oefening/verwijzings-temp-oefening';
import { AfvalTempOefeningPage } from '../pages/afval-temp-oefening/afval-temp-oefening';
import { WerkwijzeTempOefeningPage } from '../pages/werkwijze-temp-oefening/werkwijze-temp-oefening';
import { SplitterPage } from '../pages/splitter/splitter';
import { KkTempOefeningPage } from '../pages/kk-temp-oefening/kk-temp-oefening';
import { MidStepPage } from '../pages/mid-step/mid-step';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// http://masteringionic.com/blog/2017-12-15-creating-a-sortable-list-with-ionic-and-dragula/
import { DragulaModule } from '../../node_modules/ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeMakenOefeningenPage,
    HermaakOefeningPage,
    MaterialsPage, 
    SettingsPage, 
    LoginPage,
    MatTempOefeningPage,
    VerwijzingsTempOefeningPage,
    AfvalTempOefeningPage,
    WerkwijzeTempOefeningPage,
    SplitterPage, 
    KkTempOefeningPage,
    MidStepPage 
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeMakenOefeningenPage,
    HermaakOefeningPage,
    MaterialsPage, 
    SettingsPage, 
    LoginPage,
    MatTempOefeningPage,
    VerwijzingsTempOefeningPage,
    AfvalTempOefeningPage,
    WerkwijzeTempOefeningPage,
    SplitterPage, 
    KkTempOefeningPage,
    MidStepPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
