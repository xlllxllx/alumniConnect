import { Injectable } from '@angular/core';
import { Feedback } from '../models/Feedback';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFeedbackService {

  feedbacks: Feedback[] = [];
  private feedbacksRef = firebase.firestore().collection("feedback");

  constructor() { }

  getFeedbacks(): Observable<any> {
    return new Observable((observer) => {
      this.feedbacksRef.onSnapshot((querySnapshot) => {
        let feedbacks: Feedback[] = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let f = new Feedback(data['question'], data['description'], data['category'], doc['id']);

          feedbacks.push(f);
        });
        observer.next(feedbacks);
      })
    })
  }

  getFeedbackById(id: string): Observable<any> {
    return new Observable((observer) => {
      this.feedbacksRef.doc(id).get().then((doc) => {
        let data = doc.data();
        let f = new Feedback(data!['question'], data!['description'], data!['category'], doc!['id']);

        observer.next(f);
      });
    })
  }


  delete(f: Feedback) {
    const ref = this.feedbacksRef.doc(f.id);
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

  add(f: Feedback) {
    this.feedbacksRef.add({
      question: f.question,
      description: f.description,
      category: f.category
    }).then((doc) => {
      console.log('Document written with ID: ', doc.id);
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
  }
}
