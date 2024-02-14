import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { courseRequest } from '../models/courseRequest';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCourseRequestService {

  private courseRequestsRef = firebase.firestore().collection("course-request");

  constructor() { }

  add(c: courseRequest) {
    this.courseRequestsRef.add({
      title: c.title,
      subtitle: c.subtitle,
      duration: c.duration,
      weeklyHours: c.weeklyHours,
      programDateFrom: c.programDateFrom,
      programDateTo: c.programDateTo,
      about: c.about,
      instructors: c.instructors,
      count: 0
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    }).catch(error => {
      console.error('Error adding document: ', error);
    });
  }

  getCourseRequests(): Observable<any> {
    return new Observable((observer) => {
      this.courseRequestsRef.onSnapshot((querySnapshot) => {
        let courseRequests: courseRequest[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let c = new courseRequest(data['title'], data['subtitle'], data['duration'], data['weeklyHours'], data['programDateFrom'], data['programDateTo'], data['about'], data['instructors'], data['image'], data['count'], doc['id']);

          if (data['image']) {
            c.imagePath = data['image'];
            const imageRef = firebase.storage().ref().child(data['image']);
            imageRef.getDownloadURL().then(url => {
              c.image = url;
            }).catch(error => {
              console.log(error);
            });
          }
          courseRequests.push(c);
        });
        observer.next(courseRequests);
      })
    })
  }

  getCourseRequestById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.courseRequestsRef.doc(id).get().then((doc) => {
        let data = doc.data();
        let c = new courseRequest(data!['title'], data!['subtitle'], data!['duration'], data!['weeklyHours'], data!['programDateFrom'], data!['programDateTo'], data!['about'], data!['instructors'], data!['image'], data!['count'], doc!['id']);

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

  update(c: courseRequest) {
    const ref = this.courseRequestsRef.doc(c.id);
    ref.update({
      title: c.title,
      subtitle: c.subtitle,
      duration: c.duration,
      weeklyHours: c.weeklyHours,
      programDateFrom: c.programDateFrom,
      programDateTo: c.programDateTo,
      about: c.about,
      instructors: c.instructors,
      count: c.count
    }).then(() => {
      console.log('Document updated');
    }).catch(error => {
      console.log('Error: Update document fail ' + error);
    });
  }

  delete(c: courseRequest) {
    const ref = this.courseRequestsRef.doc(c.id);
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
