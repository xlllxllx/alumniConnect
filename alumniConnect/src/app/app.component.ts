import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD2J7uXWrBELnG05_7NwIbsLcVhXSZeVxI",
      authDomain: "project-3f9b9.firebaseapp.com",
      projectId: "project-3f9b9",
      storageBucket: "project-3f9b9.appspot.com",
      messagingSenderId: "13098713050",
      appId: "1:13098713050:web:b5a24e69fc31e942fa0ae3",
      measurementId: "G-W31F8W6C9B"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
