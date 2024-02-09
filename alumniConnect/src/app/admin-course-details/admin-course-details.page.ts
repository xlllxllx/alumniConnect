import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../shared/services/course.service';
import { Course } from '../shared/models/course';

import { FirebaseCourseService } from '../shared/services/firebase-course.service';

@Component({
  selector: 'app-admin-course-details',
  templateUrl: './admin-course-details.page.html',
  styleUrls: ['./admin-course-details.page.scss'],
})
export class AdminCourseDetailsPage implements OnInit {

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

  constructor(private route: ActivatedRoute, private router: Router, private courseService: FirebaseCourseService) {
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
        this.programDateFrom = this.course.programDateFrom;
        this.programDateTo = this.course.programDateTo;
        this.about = this.course.about;
        this.instructors = this.course.instructors;
      }
    });
  }

  ngOnInit() {
  }

}
