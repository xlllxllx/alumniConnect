import { Component, OnInit } from '@angular/core';
import { courseRequest } from '../shared/models/courseRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCourseRequestService } from '../shared/services/firebase-course-request.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { ToastController } from '@ionic/angular';

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

  constructor(private route: ActivatedRoute, private router: Router, private courseRequestService: FirebaseCourseRequestService, private toastController: ToastController) {
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
          this.programDateFrom = this.courseRequest.programDateFrom; // Assign the Timestamp object directly
          this.programDateTo = this.courseRequest.programDateTo; // Assign the Timestamp object directly
          this.formattedProgramDateFrom = new Date(this.programDateFrom.toDate()).toLocaleDateString("en-us");
          this.formattedProgramDateTo = new Date(this.programDateTo.toDate()).toLocaleDateString("en-us");
          this.about = this.courseRequest.about;
          this.instructors = this.courseRequest.instructors;
        }
      });
  }

  ngOnInit() {
  }

  requestCourse() {
    const courseRequestsRef = firebase.firestore().collection('course-request').doc(this.courseRequestId);

    courseRequestsRef.update({ count: firebase.firestore.FieldValue.increment(1) })
      .then(async () => {
        const toast = await this.toastController.create({
          message: 'You have successfully requested for this course.',
          duration: 2000,
          position: 'middle',
          color: 'success'
        });
        toast.present();
        console.log('Course requested successfully!');
        this.router.navigate(['/tabs/student-tab1']);
      })
      .catch(error => {
        console.error('Error requesting course:', error);
      });
  }

}
