import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../shared/models/course';
import { CourseService } from '../shared/services/course.service';
import { IonSearchbar } from '@ionic/angular';
import { FirebaseCourseService } from '../shared/services/firebase-course.service';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.page.html',
  styleUrls: ['./admin-course.page.scss'],
})
export class AdminCoursePage implements OnInit {

  @ViewChild('searchBar', { static: false }) searchbar: IonSearchbar;
 
  courses: Course[] = [];

  constructor(private courseService: FirebaseCourseService) {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  delete(item: Course) {     
    this.courseService.delete(item);   
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

  ngOnInit() {
  }
}
