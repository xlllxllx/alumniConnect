import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage  {
  userEmail: any;

  constructor(private modalController: ModalController,
              private authService: AuthService) { 
    this.authService.observeAuthState(user => {
      if (user) {
        this.userEmail = user.email;
      } else {
        this.userEmail = undefined;
      }
    })
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
