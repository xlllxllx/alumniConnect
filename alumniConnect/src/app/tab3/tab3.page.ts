import { Component } from '@angular/core';
import { Questions } from '../shared/models/Questions';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  question: Questions[] = [];
  constructor() {
    this.question = [
      new Questions('What is the difference between let and var in JavaScript?', 'I am not able to understand the difference between let and var in JavaScript. Can anyone help me with this?', 'Technical skills', 5),
      new Questions('How to prepare for a technical interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Interview', 4),
      new Questions('How to write a good resume?', 'I am not able to write a good resume. Can anyone help me with this?', 'Resume', 3),
      new Questions('How to prepare for an internship interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Internship', 4),
      new Questions('How to prepare for a job interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Job', 4),
    ];
  }
  
    
}
