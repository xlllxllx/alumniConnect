import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../shared/services/course.service';
import { Course } from '../shared/models/course';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseCourseService } from '../shared/services/firebase-course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.page.html',
  styleUrls: ['./edit-course.page.scss'],
})
export class EditCoursePage implements OnInit {

  courseId: string = "";
  course: Course | undefined;
  courseImage: string | undefined;
  editCourseForm: FormGroup;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: FirebaseCourseService) {
    this.courseId = this.route.snapshot.params['id'];

    // this.course = this.courseService.getCourseById(this.courseId);
    // this.courseImage = this.course!.image;
    this.course = new Course("", "", "", "", "", "", "", "", "");

    this.editCourseForm = new FormGroup({
      title: new FormControl(this.course?.title, [Validators.required]),
      subtitle: new FormControl(this.course?.subtitle, [Validators.required]),
      duration: new FormControl(this.course?.duration, [Validators.required]),
      weeklyHours: new FormControl(this.course?.weeklyHours, [Validators.required]),
      programDateFrom: new FormControl(this.course?.programDateFrom, [Validators.required]),
      programDateTo: new FormControl(this.course?.programDateTo, [Validators.required]),
      about: new FormControl(this.course?.about, [Validators.required]),
      instructors: new FormControl(this.course?.instructors, [Validators.required])
    })

    this.courseService.getCourseById(this.courseId)
    .subscribe(data => {
      this.course = data;
      if (this.course) {
        this.courseImage = this.course.image;
        this.editCourseForm.controls['title'].setValue(this.course.title);
        this.editCourseForm.controls['subtitle'].setValue(this.course.subtitle);
        this.editCourseForm.controls['duration'].setValue(this.course.duration);
        this.editCourseForm.controls['weeklyHours'].setValue(this.course.weeklyHours);
        this.editCourseForm.controls['programDateFrom'].setValue(this.course.programDateFrom);
        this.editCourseForm.controls['programDateTo'].setValue(this.course.programDateTo);
        this.editCourseForm.controls['about'].setValue(this.course.about);
        this.editCourseForm.controls['instructors'].setValue(this.course.instructors);
      }
    });
  }

  ngOnInit() {
  }

  update() {
    if (this.editCourseForm.valid) {
      const course = new Course(
        this.editCourseForm.value.title,
        this.editCourseForm.value.subtitle,
        this.editCourseForm.value.duration,
        this.editCourseForm.value.weeklyHours,
        this.editCourseForm.value.programDateFrom,
        this.editCourseForm.value.programDateTo,
        this.editCourseForm.value.about,
        this.editCourseForm.value.instructors,
        this.editCourseForm.value.image,
        this.courseId
      );
      this.courseService.update(course);
      this.router.navigate(['tabs/admin-course']);
    }
    
  }

}
