import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentActivityPageRoutingModule } from './student-activity-routing.module';

import { StudentActivityPage } from './student-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentActivityPageRoutingModule
  ],
  declarations: [StudentActivityPage]
})
export class StudentActivityPageModule {}
