import { Component, OnInit } from '@angular/core';
import { courseRequest } from '../shared/models/courseRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCourseRequestService } from '../shared/services/firebase-course-request.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: 'app-course-request',
  templateUrl: './course-request.page.html',
  styleUrls: ['./course-request.page.scss'],
})
export class CourseRequestPage implements OnInit {

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

  convertDateTimeToTimestamp(programDateFrom: Date): firebase.firestore.Timestamp {
    return firebase.firestore.Timestamp.fromDate(programDateFrom);
  }

  addCourse() {
    const courseRequestRef = firebase.firestore().collection('courses');

    courseRequestRef.add({
      title: this.courseRequest.title,
      subtitle: this.courseRequest.subtitle,
      duration: this.courseRequest.duration,
      weeklyHours: this.courseRequest.weeklyHours,
      programDateFrom: this.courseRequest.programDateFrom,
      programDateTo: this.courseRequest.programDateTo,
      about: this.courseRequest.about,
      instructors: this.courseRequest.instructors,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.delete(this.courseRequest);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  delete(item: courseRequest) {     
    this.courseRequestService.delete(item);   
  }

}