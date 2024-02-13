import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentCourseDetailsPageRoutingModule } from './student-course-details-routing.module';

import { StudentCourseDetailsPage } from './student-course-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCourseDetailsPageRoutingModule
  ],
  declarations: [StudentCourseDetailsPage]
})
export class StudentCourseDetailsPageModule {}
