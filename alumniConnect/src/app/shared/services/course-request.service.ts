import { Injectable } from '@angular/core';
import { courseRequest } from '../models/courseRequest';

@Injectable({
  providedIn: 'root'
})
export class CourseRequestService {

  courseRequests: courseRequest[] = [];

  constructor() {
    this.courseRequests = [
      new courseRequest("Introduction to Databases with SQL", "Learn how to create, read, update, and delete data with relational databases.", "7 weeks", "3-6 hours a week", "Oct 1, 2023", "Oct 2, 2024", "Introduction to databases using a language called SQL. Learn how to create, read, update, and delete data with relational databases, which store data in rows and columns. Learn how to model real-world entities and relationships among them using tables with appropriate types, triggers, and constraints. Learn how to normalize data to eliminate redundancies and reduce potential for errors. Learn how to join tables together using primary and foreign keys. Learn how to automate searches with views and expedite searches with indexes. Learn how to connect SQL with other languages like Python and Java. Course begins with SQLite for portability's sake and ends with introductions to PostgreSQL and MySQL for scalability's sake as well. Assignments inspired by real-world datasets.", "Mr David", "Introduction to Databases with SQL.jpeg", 0, "djoeyWmrVgDcnmHS1Old"),
    ]
  }

  getCourseRequests(): courseRequest[] {
    return this.courseRequests;
  }

  getCourseRequestById(id: string): courseRequest | undefined {
    return this.courseRequests.find(item => item.id == id);
  }

  delete(c: courseRequest) {
    const index = this.courseRequests.findIndex(item => item.id == c.id);
    if (index >= 0) {
      this.courseRequests.splice(index, 1);
    }
  }
}
