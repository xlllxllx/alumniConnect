import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCoursePage } from './admin-course.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCoursePageRoutingModule {}
