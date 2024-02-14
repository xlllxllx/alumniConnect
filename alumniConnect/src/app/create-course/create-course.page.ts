import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCourseRequestService } from '../shared/services/firebase-course-request.service';
import { courseRequest } from '../shared/models/courseRequest';

import firebase from 'firebase';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.page.html',
  styleUrls: ['./create-course.page.scss'],
})
export class CreateCoursePage implements OnInit {

  createCourseRequestForm: FormGroup;
  submitted: boolean = false;
  photo: any;
  imageURL: any;
  image!: any;

  constructor(private route: ActivatedRoute, private router: Router, private courseRequestService: FirebaseCourseRequestService) {
    this.createCourseRequestForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    weeklyHours: new FormControl('', [Validators.required]),
    programDateFrom: new FormControl('', [Validators.required]),
    programDateTo: new FormControl('', [Validators.required]),
    about: new FormControl('', [Validators.required]),
    instructors: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  add() {
    this.submitted = true;
    const programDateFromObject = new Date(this.createCourseRequestForm.value.programDateFrom);
    const programDateFromTimestamp = firebase.firestore.Timestamp.fromDate(programDateFromObject);
    const programDateToObject = new Date(this.createCourseRequestForm.value.programDateTo);
    const programDateToTimestamp = firebase.firestore.Timestamp.fromDate(programDateToObject);

    if (this.createCourseRequestForm.valid) {
      const request = new courseRequest(
        this.createCourseRequestForm.value.title,
        this.createCourseRequestForm.value.subtitle,
        this.createCourseRequestForm.value.duration,
        this.createCourseRequestForm.value.weeklyHours,
        programDateFromTimestamp,
        programDateToTimestamp,
        this.createCourseRequestForm.value.about,
        this.createCourseRequestForm.value.instructors,
        this.imageURL,
        0,
      );
      request.imagePath = this.imageURL;
      this.courseRequestService.add(request);
    }
  }

}
