import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCourseService {

  private coursesRef = firebase.firestore().collection("courses");

  constructor() { }

  add(c: Course) {
    this.coursesRef.add({
      title: c.title,
      subtitle: c.subtitle,
      duration: c.duration,
      weeklyHours: c.weeklyHours,
      programDateFrom: c.programDateFrom,
      programDateTo: c.programDateTo,
      about: c.about,
      instructors: c.instructors
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    }).catch(error => {
      console.error('Error adding document: ', error);
    });
  }

  getCourses(): Observable<any> {
    return new Observable((observer) => {
      this.coursesRef.onSnapshot((querySnapshot) => {
        let courses: Course[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let c = new Course(data['title'], data['subtitle'], data['duration'], data['weeklyHours'], data['programDateFrom'], data['programDateTo'], data['about'], data['instructors'], data['image'], doc['id']);

          if (data['image']) {
            c.imagePath = data['image'];
            const imageRef = firebase.storage().ref().child(data['image']);
            imageRef.getDownloadURL().then(url => {
              c.image = url;
            }).catch(error => {
              console.log(error);
            });
          }
          courses.push(c);
        });
        observer.next(courses);
      })
    })
  }

  getCourseById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.coursesRef.doc(id).get().then((doc) => {
        let data = doc.data();
        let c = new Course(data!['title'], data!['subtitle'], data!['duration'], data!['weeklyHours'], data!['programDateFrom'], data!['programDateTo'], data!['about'], data!['instructors'], data!['image'], doc!['id']);

        if (data!['image']) {
          c.imagePath = data!['image'];
          const imageRef = firebase.storage().ref().child(data['image']);
          imageRef.getDownloadURL().then(url => {
            c.image = url;
            observer.next(c);
            console.log('Image is ' + c.image);
          }).catch(error => {
            console.log('Error: Read image fail ' + error);
          });
        }
        observer.next(c);
      });
    })
  }

  update(c: Course) {
    const ref = this.coursesRef.doc(c.id);
    ref.update({
      title: c.title,
      subtitle: c.subtitle,
      duration: c.duration,
      weeklyHours: c.weeklyHours,
      programDateFrom: c.programDateFrom,
      programDateTo: c.programDateTo,
      about: c.about,
      instructors: c.instructors,
    }).then(() => {
      console.log('Document updated');
    }).catch(error => {
      console.log('Error: Update document fail ' + error);
    });
  }

  delete(c: Course) {
    const ref = this.coursesRef.doc(c.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        if (data!['image']) {
          const imageRef = firebase.storage().ref().child(data!['image']);
          imageRef.delete().then(() => {
            console.log('Image deleted');
          }).catch(error => {
            console.log('Error: Delete image fail ' + error);
          });
        }
        ref.delete().then(() => {
          console.log('Document deleted');
        }).catch(error => {
          console.log('Error: Delete document fail ' + error);
        });
      }
    });
  }
}
