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
import { OefeningMakenPage } from '../pages/oefening-maken/oefening-maken';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeMakenOefeningenPage,
    HermaakOefeningPage,
    MaterialsPage, 
    SettingsPage, 
    LoginPage,
    OefeningMakenPage 
  ],
  imports: [
    BrowserModule,
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
    OefeningMakenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
