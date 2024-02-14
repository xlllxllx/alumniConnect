import { Component, OnInit } from '@angular/core';
import { courseRequest } from '../shared/models/courseRequest';
import { FirebaseCourseRequestService } from '../shared/services/firebase-course-request.service';

@Component({
  selector: 'app-student-tab1',
  templateUrl: './student-tab1.page.html',
  styleUrls: ['./student-tab1.page.scss'],
})
export class StudentTab1Page implements OnInit {

  courseRequests: courseRequest[] = [];
  constructor(private courseRequestsService: FirebaseCourseRequestService) {
    
    // this.courses = this.coursesService.getCourses();
    this.courseRequestsService.getCourseRequests()
    .subscribe(data => {
      this.courseRequests = data;
    });
  }

  ngOnInit() {
  }

}
