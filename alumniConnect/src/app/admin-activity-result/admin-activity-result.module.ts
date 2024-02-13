import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminActivityResultPageRoutingModule } from './admin-activity-result-routing.module';

import { AdminActivityResultPage } from './admin-activity-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminActivityResultPageRoutingModule
  ],
  declarations: [AdminActivityResultPage]
})
export class AdminActivityResultPageModule {}
