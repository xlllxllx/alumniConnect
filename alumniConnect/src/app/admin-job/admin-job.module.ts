import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminJobPageRoutingModule } from './admin-job-routing.module';

import { AdminJobPage } from './admin-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminJobPageRoutingModule
  ],
  declarations: [AdminJobPage]
})
export class AdminJobPageModule {}
