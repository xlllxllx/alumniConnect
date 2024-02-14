import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentTab1PageRoutingModule } from './student-tab1-routing.module';

import { StudentTab1Page } from './student-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentTab1PageRoutingModule
  ],
  declarations: [StudentTab1Page]
})
export class StudentTab1PageModule {}
