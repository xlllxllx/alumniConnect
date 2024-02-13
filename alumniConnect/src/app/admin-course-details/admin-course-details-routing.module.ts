import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCourseDetailsPage } from './admin-course-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCourseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCourseDetailsPageRoutingModule {}
