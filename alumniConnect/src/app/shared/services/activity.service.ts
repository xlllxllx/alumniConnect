import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activities: Activity[] = [];

  constructor() {
    this.activities = [
      new Activity('Archery', 0, '1'),
      new Activity('Movie Night', 0, '2'),
      new Activity('Sports Day', 0, '3')
    ];
  }

  getActivities(): Activity[] {
    return this.activities;
  }

}
