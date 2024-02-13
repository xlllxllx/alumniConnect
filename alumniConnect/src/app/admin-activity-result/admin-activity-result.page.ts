import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/models/activity';
import { FirebaseActivityService } from '../shared/services/firebase-activity.service';
import { ActivityComments } from '../shared/models/activityComments';
import { FirebaseActivityCommentsService } from '../shared/services/firebase-activity-comments.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: 'app-admin-activity-result',
  templateUrl: './admin-activity-result.page.html',
  styleUrls: ['./admin-activity-result.page.scss'],
})
export class AdminActivityResultPage implements OnInit {

  activities: Activity[];
  activitiesComments: ActivityComments[];
  selectedComments: string = "";

  constructor(private activityService: FirebaseActivityService, private activityCommentsService: FirebaseActivityCommentsService) {
    this.activityCommentsService.getActivitiesComments().subscribe(data => {
      this.activitiesComments = data;
    });
    this.activityService.getActivities().subscribe(data => {
      this.activities = data;
    });
  }

  ngOnInit() {
  }

  addActivities(comments: string) {
    const activitiesCommentsRef = firebase.firestore().collection('activities');

    activitiesCommentsRef.add({
      title: comments,
      count: 0
      // Add other fields as needed
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  delete(item: ActivityComments) {
    const activity: Activity = {
      title: item.title,
      count: 0,
      id: item.id
    };
    this.activityService.delete(activity);
  }

}
