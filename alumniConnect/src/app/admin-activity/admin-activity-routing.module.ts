import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminActivityPage } from './admin-activity.page';

const routes: Routes = [
  {
    path: '',
    component: AdminActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminActivityPageRoutingModule {}
