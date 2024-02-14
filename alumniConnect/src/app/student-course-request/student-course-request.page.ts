import { Component, OnInit } from '@angular/core';
import { courseRequest } from '../shared/models/courseRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCourseRequestService } from '../shared/services/firebase-course-request.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: 'app-student-course-request',
  templateUrl: './student-course-request.page.html',
  styleUrls: ['./student-course-request.page.scss'],
})
export class StudentCourseRequestPage implements OnInit {

  courseRequestId: string = "";
  courseRequest: courseRequest | undefined;
  courseRequestImage: string | undefined;
  title: string = "";
  subtitle: string = "";
  duration: string = "";
  weeklyHours: string = "";
  programDateFrom: firebase.firestore.Timestamp;
  programDateTo: firebase.firestore.Timestamp;
  formattedProgramDateFrom: string = "";
  formattedProgramDateTo: string = "";
  about: string = "";
  instructors: string = "";
  count: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private courseRequestService: FirebaseCourseRequestService) {
    this.courseRequestId = this.route.snapshot.params['id'];

    this.courseRequestService.getCourseRequestById(this.courseRequestId)
      .subscribe(data => {
        this.courseRequest = data;
        if (this.courseRequest) {
          this.courseRequestImage = this.courseRequest.image;
          this.title = this.courseRequest.title;
          this.subtitle = this.courseRequest.subtitle;
          this.duration = this.courseRequest.duration;
          this.weeklyHours = this.courseRequest.weeklyHours;
          this.programDateFrom = this.courseRequest.programDateFrom;
          this.programDateTo = this.courseRequest.programDateTo;
          this.about = this.courseRequest.about;
          this.instructors = this.courseRequest.instructors;
          this.count = this.courseRequest.count;
        }
      });
  }

  ngOnInit() {
  }

  requestCourse() {
    const courseRequestsRef = firebase.firestore().collection('course-request').doc(this.courseRequestId);

    courseRequestsRef.update({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => {
        console.log('Course requested successfully!');
        this.router.navigate(['/tabs/student-tab1']);
      })
      .catch(error => {
        console.error('Error requesting course:', error);
      });
  }

}
