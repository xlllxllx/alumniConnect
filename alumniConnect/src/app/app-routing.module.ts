import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'course-request/:coursename',
    
    loadChildren: () => import('./course-request/course-request.module').then( m => m.CourseRequestPageModule)
  },
  {
    path: 'add-question',
    loadChildren: () => import('./add-question/add-question.module').then( m => m.AddQuestionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
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
  },
  {
    path: 'admin-activity',
    loadChildren: () => import('./admin-activity/admin-activity.module').then( m => m.AdminActivityPageModule)
  },
  {
    path: 'student-activity',
    loadChildren: () => import('./student-activity/student-activity.module').then( m => m.StudentActivityPageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'admin-activity-result',
    loadChildren: () => import('./admin-activity-result/admin-activity-result.module').then( m => m.AdminActivityResultPageModule)
  },
  {
    path: 'student-activity-result',
    loadChildren: () => import('./student-activity-result/student-activity-result.module').then( m => m.StudentActivityResultPageModule)
  },
  {
    path: 'admin-activity-result',
    loadChildren: () => import('./admin-activity-result/admin-activity-result.module').then( m => m.AdminActivityResultPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}