import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminActivityPageRoutingModule } from './admin-activity-routing.module';

import { AdminActivityPage } from './admin-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminActivityPageRoutingModule
  ],
  declarations: [AdminActivityPage]
})
export class AdminActivityPageModule {}
