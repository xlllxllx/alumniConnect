import { Component } from '@angular/core';
import { Questions } from '../shared/models/Questions';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { LoginPage } from '../login/login.page';
import { UserProfile } from '../shared/models/UserProfile';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: UserProfile;
  userName: string;
  question: Questions[] = [];
  
  constructor(private modalController: ModalController,
              private authService: AuthService) {
    this.question = [
      new Questions('What is the difference between let and var in JavaScript?', 'I am not able to understand the difference between let and var in JavaScript. Can anyone help me with this?', 'Technical skills', 5),
      new Questions('How to prepare for a technical interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Interview', 4),
      new Questions('How to write a good resume?', 'I am not able to write a good resume. Can anyone help me with this?', 'Resume', 3),
      new Questions('How to prepare for an internship interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Internship', 4),
      new Questions('How to prepare for a job interview?', 'I have an interview next week. Can anyone help me with the preparation?', 'Job', 4),
    ];

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
