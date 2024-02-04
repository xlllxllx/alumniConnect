import { Injectable } from '@angular/core';
import { Courses } from '../models/Courses';
import { Questions } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Courses[] = [];
  questions: Questions[] = [];

  constructor() {
    this.courses = [
      new Courses('B.Tech', 4, 'assets/images/course1.jpeg', '1'),
      new Courses('M.Tech', 2, 'assets/images/course2.png', '2'),
      new Courses('MBA', 2.5, 'assets/images/course3.jpeg', '3'),
      new Courses('BBA', 3, 'assets/images/course4.png', '4'),
      new Courses('BCA', 3.5, 'assets/images/course5.jpeg', '5'),
      new Courses('MCA', 3.5, 'assets/images/course1.jpeg', '6'),
      new Courses('B.Sc', 3, 'assets/images/course5.jpeg', '7'),
      new Courses('M.Sc', 2, 'assets/images/course1.jpeg', '8'),
      new Courses('B.Com', 3, 'assets/images/course5.jpeg', '9'),
      new Courses('M.Com', 2, 'assets/images/course1.jpeg', '10'),

    ];
  }
  getCourses(): Courses[] {
    return this.courses;
  }
  getCourseById(id: string): Courses |undefined {
    return this.courses.find(item => item.id == id);
    }
  add(q:Questions){
    this.questions.push(q);
  }
}
