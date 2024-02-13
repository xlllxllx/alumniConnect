import { Component, ViewChild } from '@angular/core';
import { Course } from '../shared/models/course';
import { CourseService } from '../shared/services/course.service';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { FirebaseCourseService } from '../shared/services/firebase-course.service';
import { UserProfile } from '../shared/models/UserProfile';
import { AuthService } from '../shared/services/auth.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.page.html',
  styleUrls: ['./student-course.page.scss'],
})
export class StudentCoursePage  {

  @ViewChild('searchBar', { static: false }) searchbar: IonSearchbar;

  courses: Course[] = [];
  user: UserProfile;
  userName: string;

  constructor(private courseService: FirebaseCourseService,
              private modalController: ModalController,
              private authService: AuthService) {
    this.courseService.getCourses().subscribe(data => {
        this.courses = data;
    });

    this.authService.observeAuthState(user => {
      if (user) {
        this.authService.getUserProfile(user.uid).subscribe(data => {
          this.user = data;
          this.userName = this.user.username;
        })
      } else {
        this.user = undefined;
      }
    });
  }

  search(event) {
    const text = event.target.value;
    this.courseService.getCourses().subscribe(allCourses => {
      if (text && text.trim() !== '') {
        this.courses = allCourses.filter(
          item => item.title.toLowerCase().includes(text.toLowerCase()));
      } else {
        this.courses = allCourses;
      }
    });
  }

  refresh($event) {
    this.searchbar.value = "";
    $event.target.complete();
    this.courseService.getCourses().subscribe(allCourses => {
      this.courses = allCourses;
    });
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  logout() {
    this.authService.logout();
  }

  
}
