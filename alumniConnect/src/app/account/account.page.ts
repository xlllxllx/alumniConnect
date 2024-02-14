import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { SignupPage } from '../signup/signup.page';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../shared/models/UserProfile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  userName: string;
  userId: any;
  user: UserProfile;
  updated: boolean = false;

  constructor(private modalController: ModalController,
              private router: Router,
              private authService: AuthService) { 
                
    this.authService.observeAuthState(user => {
      if (user) {
        this.userId = user.uid;
        this.authService.getUserProfile(this.userId).subscribe(data => {
          this.user = data;
          this.userName = this.user.username;
        });
      } else {
        this.user = undefined;
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

  async signup() {
    const modal = await this.modalController.create({
      component: SignupPage
    });
    return await modal.present();
  }



}
