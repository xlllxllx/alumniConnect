import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class FirebaseActivityService {
  private activitiesRef = firebase.firestore().collection('activities');

  constructor() { }

  getActivities(): Observable<any> {
    return new Observable((observer) => {
      this.activitiesRef.onSnapshot((querySnapshot) => {
        let activities: Activity[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let a = new Activity(data['title'], data['count'], doc['id']);
          activities.push(a);
        });
        observer.next(activities);
      });
    });
  }

  getActivityById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.activitiesRef.doc(id).get().then((doc) => {
        let data = doc.data();
        let a = new Activity(data!['title'], data!['count'], doc!['id']);
        observer.next(a);
      })
    });
  }

  update(a: Activity) {
    const ref = this.activitiesRef.doc(a.id);
    ref.update({
      count: a.count,
    })
  }

  delete(a: Activity) {
    const ref = this.activitiesRef.doc(a.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        ref.delete().then(() => {
          console.log('Document deleted');
        }).catch(error => {
          console.log('Error: Delete document fail ' + error);
        });
      }
    });
  }
}
