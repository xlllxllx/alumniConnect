import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminActivityResultPage } from './admin-activity-result.page';

const routes: Routes = [
  {
    path: '',
    component: AdminActivityResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminActivityResultPageRoutingModule {}
