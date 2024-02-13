import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCoursePageRoutingModule } from './admin-course-routing.module';

import { AdminCoursePage } from './admin-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCoursePageRoutingModule
  ],
  declarations: [AdminCoursePage]
})
export class AdminCoursePageModule {}
