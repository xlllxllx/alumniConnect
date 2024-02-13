import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseRequestPage } from './course-request.page';

const routes: Routes = [
  {
    path: '',
    component: CourseRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRequestPageRoutingModule {}
