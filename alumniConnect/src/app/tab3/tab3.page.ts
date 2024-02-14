import { Component } from '@angular/core';
import { Feedback} from '../shared/models/Feedback';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { LoginPage } from '../login/login.page';
import { UserProfile } from '../shared/models/UserProfile';
import { FirebaseFeedbackService } from '../shared/services/firebase-feedback.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: UserProfile;
  userName: string;
  feedback: Feedback[] = [];
  
  constructor(private modalController: ModalController, private authService: AuthService, private feedbackService: FirebaseFeedbackService) {
    // this.feedback = [
    //   new Feedback('What is the difference between let and var in JavaScript?', 'I am not able to understand the difference between let and var in JavaScript. Can anyone help me with this?', 'Technical skills', '5'),
    //   new Feedback('How to prepare for a technical interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Interview', '4'),
    //   new Feedback('How to write a good resume?', 'I am not able to write a good resume. Can anyone help me with this?', 'Resume', '3'),
    //   new Feedback('How to prepare for an internship interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Internship', '2'),
    //   new Feedback('How to prepare for a job interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Job', '1'),
    // ];

    this.feedbackService.getFeedbacks().subscribe(data => {
      this.feedback = data;
    });

    this.authService.observeAuthState(user => {
      if (user) {
        this.authService.getUserProfile(user.uid).subscribe(data => {
          this.user = data;
          this.userName = this.user.username;
        })
      } else {
        this.userName = undefined;
      }
    });
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  logout() {
    this.authService.logout();
  }
  
    
}
