import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserProfile } from '../shared/models/UserProfile';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
  signupForm: FormGroup;
  signupError: string = "";

  constructor(private modalController: ModalController,
              private authService: AuthService) { 
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl(''),
      contact: new FormControl('')
    });
  }

  signup() {
    this.authService.signup(
      this.signupForm.value.email,
      this.signupForm.value.password
    ).then( user => {
      this.modalController.dismiss();
      const additionalInfo: UserProfile = {
        id: user.uid,
        username: this.signupForm.value.username,
        contact: this.signupForm.value.contact,
        email: this.signupForm.value.email,
      };
      this.authService.addUser(additionalInfo).then(() => {
        console.log("User profile created");
      }).catch((error) => {
        console.log("Error creating user profile: ", error);
      })
    }
    ).catch(
      error => this.signupError = error.message
    );
  }

}
