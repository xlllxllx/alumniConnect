import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/models/activity';
import { FirebaseActivityService } from '../shared/services/firebase-activity.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Router } from '@angular/router';
import { ActivityComments } from '../shared/models/activityComments';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.page.html',
  styleUrls: ['./student-activity.page.scss'],
})
export class StudentActivityPage implements OnInit {
  activities: Activity[];
  activitiesComments: ActivityComments[];
  selectedOption: string = "";
  comments: string = "";

  constructor(private activityService: FirebaseActivityService, private router: Router) {
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
    if (this.selectedOption) {
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
    else if (this.comments) {
      // Add comment to Firestore
      firebase.firestore().collection('activities-comments').add({ title: this.comments })
        .then(() => {
          console.log('Comment added successfully!');
          this.comments = ''; // Clear the comment input
        })
        .catch(error => {
          console.error('Error adding comment:', error);
        });
    }

    this.router.navigate(['/student-activity-result']);
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

