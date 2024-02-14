import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/models/activity';
import { FirebaseActivityService } from '../shared/services/firebase-activity.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.page.html',
  styleUrls: ['./admin-activity.page.scss'],
})
export class AdminActivityPage implements OnInit {
  activities: Activity[];
  selectedOption: string = "";
  comments: string = "";
  eventsList: any[];

  constructor(private activityService: FirebaseActivityService) {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
    });
  }

  ngOnInit() {
  }

  resetVote() {
    this.selectedOption = "";
    this.comments = "";
  }

  submitVote() {
    // Get the reference to the document for the selected option
    const activitiesRef = firebase.firestore().collection('activities').doc(this.selectedOption);

    // Atomically increment the count by 1
    activitiesRef.update({ count: firebase.firestore.FieldValue.increment(1) })
      .then(() => {
        console.log('Vote submitted successfully!');
      })
      .catch(error => {
        console.error('Error updating count:', error);
      });
  }

  isSubmitDisabled() {
    if (this.selectedOption !== '' || this.comments !== '') {
      return false;
    }
    else {
      return true;
    }
  }
  
}

