import { Injectable } from '@angular/core';
import { ActivityComments } from '../models/activityComments';

@Injectable({
  providedIn: 'root'
})
export class ActivityCommentsService {

  activitiesComments: ActivityComments[] = [];

  constructor() {
    this.activitiesComments = [
      new ActivityComments('Sports Day', '1'),
      new ActivityComments('Beach Day', '2')
    ];
  }

  getActivitiesComments(): ActivityComments[] {
    return this.activitiesComments;
  }
}
