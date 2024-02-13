import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentActivityResultPageRoutingModule } from './student-activity-result-routing.module';

import { StudentActivityResultPage } from './student-activity-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentActivityResultPageRoutingModule
  ],
  declarations: [StudentActivityResultPage]
})
export class StudentActivityResultPageModule {}
