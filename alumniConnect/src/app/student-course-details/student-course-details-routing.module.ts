import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCourseDetailsPage } from './student-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: StudentCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentCourseDetailsPageRoutingModule {}
