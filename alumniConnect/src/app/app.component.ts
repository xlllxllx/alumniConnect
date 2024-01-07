import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBGvO4LU7ww6qRXme1GdxgkpeKOj5uTIP4",
      authDomain: "alumniconnect-jj.firebaseapp.com",
      projectId: "alumniconnect-jj",
      storageBucket: "alumniconnect-jj.appspot.com",
      messagingSenderId: "337019866190",
      appId: "1:337019866190:web:4f5a652337eed9aad4871f",
      measurementId: "G-KPCF6C16NB"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
