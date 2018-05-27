import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TestDataPage } from '../pages/test-data/test-data';
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
import { ChooseListPage } from '../pages/choose-list/choose-list';
import { FullMatPage } from '../pages/full-mat/full-mat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// http://masteringionic.com/blog/2017-12-15-creating-a-sortable-list-with-ionic-and-dragula/
import { DragulaModule } from '../../node_modules/ng2-dragula';
import { ProvDataProvider } from '../providers/prov-data/prov-data';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyCKyG8wOBJDzjjTcWsCCZ0ZKApN3OPBxOk",
  authDomain: "mobile-project-799eb.firebaseapp.com",
  databaseURL: "https://mobile-project-799eb.firebaseio.com",
  projectId: "mobile-project-799eb",
  storageBucket: "mobile-project-799eb.appspot.com",
  messagingSenderId: "319132470873"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestDataPage,
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
    MidStepPage,
    ChooseListPage,
    FullMatPage 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragulaModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestDataPage,
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
    MidStepPage,
    ChooseListPage,
    FullMatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvDataProvider
  ]
})
export class AppModule {}
