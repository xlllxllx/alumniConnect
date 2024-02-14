import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentCourseRequestPageRoutingModule } from './student-course-request-routing.module';

import { StudentCourseRequestPage } from './student-course-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCourseRequestPageRoutingModule
  ],
  declarations: [StudentCourseRequestPage]
})
export class StudentCourseRequestPageModule {}
