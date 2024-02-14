import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../shared/services/courses.service';
import { Feedback } from '../shared/models/Feedback';
import { FirebaseFeedbackService } from '../shared/services/firebase-feedback.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.page.html',
  styleUrls: ['./add-question.page.scss'],
})
export class AddQuestionPage implements OnInit {
  addQuestionForm: FormGroup;
  categories: string[]|undefined;
  submitted:boolean = false;
  constructor(private router: Router, 
    private feedbackService: FirebaseFeedbackService) {
    
    this.categories = ['Technical skills', 'Soft skills', 'Interview', 'Resume', 'Internship', 'Job'];
    this.addQuestionForm = new FormGroup({
      question: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('Technical skills'),
      score :new FormControl(''),
    });

  }
 
  ngOnInit() {}
  
  add() {
    this.submitted = true;

    if (this.addQuestionForm.valid) {
      const feed = new Feedback(
        this.addQuestionForm.value.question,
        this.addQuestionForm.value.description,
        this.addQuestionForm.value.category
      );
      this.feedbackService.add(feed);
      this.router.navigate(['/tabs/tab3']);
    }
    }
   }


