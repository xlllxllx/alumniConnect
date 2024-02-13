import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentActivityPage } from './student-activity.page';

const routes: Routes = [
  {
    path: '',
    component: StudentActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentActivityPageRoutingModule {}
