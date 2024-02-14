import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/models/activity';
import { FirebaseActivityService } from '../shared/services/firebase-activity.service';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

@Component({
  selector: 'app-student-activity-result',
  templateUrl: './student-activity-result.page.html',
  styleUrls: ['./student-activity-result.page.scss'],
})
export class StudentActivityResultPage implements OnInit {

  activity: Activity[] = [];

  constructor(private activityService: FirebaseActivityService) {
    this.activityService.getActivities().subscribe(data => {
      this.activity = data;
    });

  }

  ngOnInit() {
  }
}
