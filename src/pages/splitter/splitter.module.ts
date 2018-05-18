import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplitterPage } from './splitter';

@NgModule({
  declarations: [
    SplitterPage,
  ],
  imports: [
    IonicPageModule.forChild(SplitterPage),
  ],
})
export class SplitterPageModule {}
