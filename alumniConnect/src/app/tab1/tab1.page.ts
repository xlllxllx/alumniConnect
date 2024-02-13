import { Component } from '@angular/core';
import { Courses } from '../shared/models/Courses';
import { FirebaseProductService } from '../shared/services/firebase-product.service';
import { CoursesService } from '../shared/services/courses.service';
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { UserProfile } from '../shared/models/UserProfile';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: UserProfile;
  userName: string;
  courses: Courses[] = [];
  constructor(private coursesService: FirebaseProductService,
              private modalController: ModalController,
              private authService: AuthService) {
    
    // this.courses = this.coursesService.getCourses();
    this.coursesService.getCourses()
    .subscribe(data => {
      this.courses = data;
    });
  // this.coursesService.getCourses().subscribe((data) => {
  // this.courses = data;});
    // this.courses = [
    //   new Courses('B.Tech', 4, 'assets/images/course1.jpeg', '1'),
    //   new Courses('M.Tech', 2, 'assets/images/course2.png', '2'),
    //   new Courses('MBA', 2.5, 'assets/images/course3.jpeg', '3'),
    //   new Courses('BBA', 3, 'assets/images/course4.png', '4'),
    //   new Courses('BCA', 3.5, 'assets/images/course5.jpeg', '5'),
    //   new Courses('MCA', 3.5, 'assets/images/course1.jpeg', '6'),
    //   new Courses('B.Sc', 3, 'assets/images/course5.jpeg', '7'),
    //   new Courses('M.Sc', 2, 'assets/images/course1.jpeg', '8'),
    //   new Courses('B.Com', 3, 'assets/images/course5.jpeg', '9'),
    //   new Courses('M.Com', 2, 'assets/images/course1.jpeg', '10'),

    // ];
      this.authService.observeAuthState(user => {
        if (user) {
          this.authService.getUserProfile(user.uid).subscribe(data => {
            this.user = data;
            this.userName = this.user.username;
          })
        } else {
          this.userName = undefined;
        }
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
