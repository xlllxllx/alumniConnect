import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: 'admin-course',
        loadChildren: () => import('../admin-course/admin-course.module').then(m => m.AdminCoursePageModule)
      },
      {
        path: 'student-course',
        loadChildren: () => import('../student-course/student-course.module').then(m => m.StudentCoursePageModule)
      },
      {
        path: 'admin-activity',
        loadChildren: () => import('../admin-activity/admin-activity.module').then(m => m.AdminActivityPageModule)
      },
      {
        path: 'admin-activity-result',
        loadChildren: () => import('../admin-activity-result/admin-activity-result.module').then(m => m.AdminActivityResultPageModule)
      },
      {
        path: 'student-activity',
        loadChildren: () => import('../student-activity/student-activity.module').then(m => m.StudentActivityPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
