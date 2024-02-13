import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { ActivityComments } from '../models/activityComments';

@Injectable({
  providedIn: 'root'
})
export class FirebaseActivityCommentsService {

  private activitiesCommentsRef = firebase.firestore().collection('activities-comments');

  constructor() { }

  getActivitiesComments(): Observable<any> {
    return new Observable((observer) => {
      this.activitiesCommentsRef.onSnapshot((querySnapshot) => {
        let activitiesComments: ActivityComments[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let ac = new ActivityComments(data['title'], doc['id']);
          activitiesComments.push(ac);
        });
        observer.next(activitiesComments);
      });
    });
  }

  getActivityCommentsById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.activitiesCommentsRef.doc(id).get().then((doc) => {
        let data = doc.data();
        let ac = new ActivityComments(data!['title'], doc!['id']);
        observer.next(ac);
      })
    });
  }
}
