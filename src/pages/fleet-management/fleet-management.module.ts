import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FleetManagementPage } from './fleet-management';

@NgModule({
  declarations: [
    FleetManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FleetManagementPage),
  ],
})
export class FleetManagementPageModule {}
