import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRef = firebase.firestore().collection("users");
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
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
      const user = userCredential.user;
      return user;
    });
  }

  addUser(u: UserProfile) : Promise<void>{
    return this.userRef.doc(u.id).set({
      username: u.username,
      contact: u.contact,
      email: u.email
    })
  }

  getUserProfile(userId: string): Observable<any> {
    return new Observable((observer) => {
      this.userRef.doc(userId).get().then((doc) => {
        let data = doc.data();
        let u = new UserProfile(data!['username'], data!['contact'], data!['email'], data!['employment'], doc!['id']);
        if (data!['employment']) u.employment = data!['employment'];
         console.log("User: ", u);
        observer.next(u);
      });
    });
  }

  update(u: UserProfile) {
    const ref = this.userRef.doc(u.id);

    ref.update({
      username: u.username,
      contact: u.contact,
      email: u.email,
      employment: u.employment
    });
  }

}
