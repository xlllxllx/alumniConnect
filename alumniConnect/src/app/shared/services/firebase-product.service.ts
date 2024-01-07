import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductService {
  private productsRef = firebase.firestore().collection("course");
  constructor() {
    
      }
   }

