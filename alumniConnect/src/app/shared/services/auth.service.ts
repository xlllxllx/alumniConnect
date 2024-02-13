import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  observeAuthState(func: firebase.Observer<any, Error> | ((a: firebase.User | null) => any)) {
    return firebase.auth().onAuthStateChanged(func);
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebase.auth().signOut();
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(users => {
    //   const user = users.user;

    //   const db = firebase.firestore();
    //   db.collection('users').doc(user.uid).set({
    //     name: email,
    //   })
    // }).catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.error(`Error creating account: ${errorCode} - ${errorMessage}`);
    // });
  }

  // getUserProfile(userId: string): Observable<UserProfile> {
  //   return firebase.firestore().collection('users').doc(userId).valueChanges();
  // }
}
