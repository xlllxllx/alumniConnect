import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseRequestPageRoutingModule } from './course-request-routing.module';

import { CourseRequestPage } from './course-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseRequestPageRoutingModule
  ],
  declarations: [CourseRequestPage]
})
export class CourseRequestPageModule {}
