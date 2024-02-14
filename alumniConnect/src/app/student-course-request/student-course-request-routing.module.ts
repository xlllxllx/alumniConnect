import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCourseRequestPage } from './student-course-request.page';

const routes: Routes = [
  {
    path: '',
    component: StudentCourseRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentCourseRequestPageRoutingModule {}
