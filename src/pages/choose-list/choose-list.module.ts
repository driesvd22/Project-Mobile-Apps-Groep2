import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseListPage } from './choose-list';

@NgModule({
  declarations: [
    ChooseListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseListPage),
  ],
})
export class ChooseListPageModule {}
