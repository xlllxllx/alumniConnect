import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs/internal/Observable';
import { Courses } from '../models/Courses';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductService {
  getCoursesById(id: string): Observable<any> {
    return new Observable((observer) => {
    this.productsRef.doc(id).get().then((doc) => {
    let data = doc.data();
    let c = new Courses(data!['coursename'], data!['duration'], data!['image'],doc['id']);
    // let data = doc.data();
    // let p = new Courses(data['coursename'], data['duration'],doc['id']);
    if (data!['image']) {
      c.imagePath = data!['image'];
      const imageRef = firebase.storage().ref().child(data!['image']);
      imageRef.getDownloadURL()
      .then(url => {
          c.image = url;
// Tell the subscriber that image is updated
        observer.next(c);
        console.log('Image is ' + c.image);
        }).catch(error => {
        console.log('Error: Read image fail ' + error);
    });
  }

    observer.next(c);
      });
    });
  }
  private productsRef = firebase.firestore().collection("courses");
  getCourses(): Observable<any> {
    return new Observable((observer) => {
    this.productsRef.onSnapshot((querySnapshot) => {
    let course: Courses[] = [];
    querySnapshot.forEach((doc) => {
    let data = doc.data();
    let c = new Courses(data!['coursename'], data!['duration'],data['image'],doc['id']);
    if (data!['image']) {
      c.imagePath = data!['image'];
      const imageRef = firebase.storage().ref().child(data!['image']);
      imageRef.getDownloadURL()
      .then(url => {
          c.image = url;
        }).catch(error => {
          console.log('Error: Read image fail ' + error);
            });
          }
          course.push(c);
        });
        observer.next(course);
      });
    });
  }

    constructor() {}
  }

