import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminJobPage } from './admin-job.page';

const routes: Routes = [
  {
    path: '',
    component: AdminJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminJobPageRoutingModule {}
