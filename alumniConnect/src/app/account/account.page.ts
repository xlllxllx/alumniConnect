import { Component } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { SignupPage } from '../signup/signup.page';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from '../shared/models/UserProfile';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage  {
  userProfileForm!: FormGroup;
  userEmail: any;
  userId: any;
  user: UserProfile;
  updated: boolean = false;

  constructor(private modalController: ModalController,
              private authService: AuthService) { 
    this.authService.observeAuthState(user => {
      if (user) {
        this.userEmail = user.email;
        this.userId = user.uid;
        this.user = new UserProfile('', 0, '');
        this.userProfileForm = new FormGroup({
          username: new FormControl(this.user.username, [Validators.required]),
          contact: new FormControl(this.user.contact, [Validators.required]),
          email: new FormControl(this.user.email),
          employment: new FormControl(this.user.employment)
        });
        console.log("Empty: ", this.user);
        this.authService.getUserProfile(this.userId).subscribe(data => {
          this.user = data;
          console.log("User: ", this.user);
          if (this.user) {
            this.userProfileForm.controls['username'].setValue(this.user.username);
            this.userProfileForm.controls['contact'].setValue(this.user.contact);
            this.userProfileForm.controls['email'].setValue(this.user.email);
            this.userProfileForm.controls['emplyoment'].setValue(this.user.employment);
          }
        });
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

  update() {
    this.updated = true;
    if (this.user != undefined && this.userProfileForm.valid) {
      const user = new UserProfile(
        this.userProfileForm.value.username,
        this.userProfileForm.value.contact,
        this.userProfileForm.value.email
      );
      user.employment = this.userProfileForm.value.employment;
      
    }
  }


}
