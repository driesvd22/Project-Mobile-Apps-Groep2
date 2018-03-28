import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialsPage } from './materials';

@NgModule({
  declarations: [
    MaterialsPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialsPage),
  ],
})
export class MaterialsPageModule {}
