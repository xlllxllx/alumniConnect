import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'admin-course',
    loadChildren: () => import('./admin-course/admin-course.module').then( m => m.AdminCoursePageModule)
  },
  {
    path: 'student-course',
    loadChildren: () => import('./student-course/student-course.module').then( m => m.StudentCoursePageModule)
  },
  {
    path: 'create-course',
    loadChildren: () => import('./create-course/create-course.module').then( m => m.CreateCoursePageModule)
  },
  {
    path: 'edit-course/:id',
    loadChildren: () => import('./edit-course/edit-course.module').then( m => m.EditCoursePageModule)
  },
  {
    path: 'admin-course-details/:id',
    loadChildren: () => import('./admin-course-details/admin-course-details.module').then( m => m.AdminCourseDetailsPageModule)
  },
  {
    path: 'student-course-details/:id',
    loadChildren: () => import('./student-course-details/student-course-details.module').then( m => m.StudentCourseDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
