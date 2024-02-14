import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../shared/services/course.service';
import { Course } from '../shared/models/course';

import { FirebaseCourseService } from '../shared/services/firebase-course.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-student-course-details',
  templateUrl: './student-course-details.page.html',
  styleUrls: ['./student-course-details.page.scss'],
})
export class StudentCourseDetailsPage implements OnInit {

  courseId: string = "";
  course: Course | undefined;
  courseImage: string | undefined;
  title: string = "";
  subtitle: string = "";
  duration: string = "";
  weeklyHours: string = "";
  programDateFrom: string = "";
  programDateTo: string = "";
  about: string = "";
  instructors: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private courseService: FirebaseCourseService, private toastController: ToastController, private authService: AuthService) {
    this.courseId = this.route.snapshot.params['id'];

    this.courseService.getCourseById(this.courseId)
      .subscribe(data => {
        this.course = data;
        if (this.course) {
          this.courseImage = this.course.image;
          this.title = this.course.title;
          this.subtitle = this.course.subtitle;
          this.duration = this.course.duration;
          this.weeklyHours = this.course.weeklyHours;
          this.programDateFrom = this.course.programDateFrom.toDate().toISOString();
          this.programDateTo = this.course.programDateTo.toDate().toISOString();
          this.about = this.course.about;
          this.instructors = this.course.instructors;
        }
      });
  }

  ngOnInit() {
  }

  async enroll() {
    const toast = await this.toastController.create({
      message: 'You have successfully enrolled in this course.',
      duration: 2000,
      position: 'middle',
      color: 'success'
    });
    toast.present();
  }
}

