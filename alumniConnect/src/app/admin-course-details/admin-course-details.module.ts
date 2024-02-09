import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCourseDetailsPageRoutingModule } from './admin-course-details-routing.module';

import { AdminCourseDetailsPage } from './admin-course-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCourseDetailsPageRoutingModule
  ],
  declarations: [AdminCourseDetailsPage]
})
export class AdminCourseDetailsPageModule {}
