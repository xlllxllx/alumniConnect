import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentActivityResultPage } from './student-activity-result.page';

const routes: Routes = [
  {
    path: '',
    component: StudentActivityResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentActivityResultPageRoutingModule {}
