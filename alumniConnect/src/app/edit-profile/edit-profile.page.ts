import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserProfile } from '../shared/models/UserProfile';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage  {
  userProfileForm!: FormGroup;
  userId: string;
  userName: string;
  user: UserProfile;
  updated: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { 
    this.authService.observeAuthState(user => {
      if (user) {
        this.userId = user.uid;
        this.user = new UserProfile('', 0, '');
        this.userProfileForm = new FormGroup({
          username: new FormControl(this.user.username, [Validators.required]),
          contact: new FormControl(this.user.contact, [Validators.required]),
          email: new FormControl(this.user.email),
          employment: new FormControl(this.user.employment)
        });
        this.authService.getUserProfile(this.userId).subscribe(data => {
          this.user = data;
          this.userName = this.user.username;
          console.log("User: ", this.user);
          if (this.user) {
            this.userProfileForm.controls['username'].setValue(this.user.username);
            this.userProfileForm.controls['contact'].setValue(this.user.contact);
            this.userProfileForm.controls['email'].setValue(this.user.email);
            this.userProfileForm.controls['emplyoment'].setValue(this.user.employment);
          }
        });
      } else {
        this.user = undefined;
      }
    });
  }

  update() {
    this.updated = true;
    if (this.user != undefined && this.userProfileForm.valid) {
      const user = new UserProfile(
        this.userProfileForm.value.username,
        this.userProfileForm.value.contact,
        this.userProfileForm.value.email,
      );
      user.employment = this.userProfileForm.value.employment;
      user.id = this.userId;
      this.authService.update(user);
      this.router.navigate(['tabs/account']);
    }
  }
}
