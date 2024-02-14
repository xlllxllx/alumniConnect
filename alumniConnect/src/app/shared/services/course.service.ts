import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [];

  constructor() {
    // this.courses = [
    //   new Course("Introduction to Databases with SQL", "Learn how to create, read, update, and delete data with relational databases.", "7 weeks", "3-6 hours a week", 1 October 2023 at 00:00:00 UTC+8, "Oct 2, 2024", "Introduction to databases using a language called SQL. Learn how to create, read, update, and delete data with relational databases, which store data in rows and columns. Learn how to model real-world entities and relationships among them using tables with appropriate types, triggers, and constraints. Learn how to normalize data to eliminate redundancies and reduce potential for errors. Learn how to join tables together using primary and foreign keys. Learn how to automate searches with views and expedite searches with indexes. Learn how to connect SQL with other languages like Python and Java. Course begins with SQLite for portability's sake and ends with introductions to PostgreSQL and MySQL for scalability's sake as well. Assignments inspired by real-world datasets.", "Mr David", "Introduction to Databases with SQL.jpeg", "djoeyWmrVgDcnmHS1Old"),
    // ]
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(item => item.id == id);
  }

  delete(c: Course) {
    const index = this.courses.findIndex(item => item.id == c.id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
