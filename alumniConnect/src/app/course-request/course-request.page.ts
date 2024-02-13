import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-request',
  templateUrl: './course-request.page.html',
  styleUrls: ['./course-request.page.scss'],
})

export class CourseRequestPage implements OnInit {
    courseId: string="";
    
    constructor(private route: ActivatedRoute) { 
      this.courseId = this.route.snapshot.params['coursename'];
    }
    
    ngOnInit() {
    }

  }
