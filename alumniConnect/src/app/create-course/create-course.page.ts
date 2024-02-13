import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../shared/services/course.service';
import { Course } from '../shared/models/course';
import { FirebaseCourseService } from '../shared/services/firebase-course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.page.html',
  styleUrls: ['./create-course.page.scss'],
})
export class CreateCoursePage implements OnInit {

  createCourseForm: FormGroup;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: FirebaseCourseService) {
    this.createCourseForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      subtitle: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      weeklyHours: new FormControl('', [Validators.required]),
      programDateTo: new FormControl('', [Validators.required]),
      programDateFrom: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
      instructors: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  add() {
    this.submitted = true;

    if (this.createCourseForm.valid) {
      const course = new Course(
        this.createCourseForm.value.title,
        this.createCourseForm.value.subtitle,
        this.createCourseForm.value.duration,
        this.createCourseForm.value.weeklyHours,
        this.createCourseForm.value.programDateTo,
        this.createCourseForm.value.programDateFrom,
        this.createCourseForm.value.about,
        this.createCourseForm.value.instructors,
        "",
        this.createCourseForm.value.title
      );
      this.courseService.add(course);

      this.router.navigate(['tabs/admin-course']);
    }

  }

}
