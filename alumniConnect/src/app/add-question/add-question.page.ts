import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../shared/services/courses.service';
import { Questions } from '../shared/models/Questions';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.page.html',
  styleUrls: ['./add-question.page.scss'],
})
export class AddQuestionPage implements OnInit {
  addQuestionForm: FormGroup;
  categories: string[]|undefined;
  submitted:boolean = false;
  score:number|undefined;
  constructor(private router: Router, 
    private coursesService: CoursesService) {
    
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

    const question = new Questions(
    this.addQuestionForm.value.question,
    this.addQuestionForm.value.description,
    this.addQuestionForm.value.category,
    this.addQuestionForm.value.score
    );
    
    question.category = this.addQuestionForm.value.category;
    question.description = this.addQuestionForm.value.description;
    question.question = this.addQuestionForm.value.question;
    this.coursesService.add(question);
   
    this.router.navigate(['tabs/tab3']);
    }
   }


