import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentTab1Page } from './student-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: StudentTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentTab1PageRoutingModule {}
