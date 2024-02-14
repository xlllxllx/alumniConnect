import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserProfile } from '../shared/models/UserProfile';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit{
  userProfileForm!: FormGroup;
  userId: string;
  userName: string;
  user1: UserProfile;

  constructor(private authService: AuthService,
              private router: Router) { 
    this.userProfileForm = new FormGroup({
      username: new FormControl([Validators.required]),
      contact: new FormControl([Validators.required]),
      email: new FormControl(),
      employment: new FormControl()
    });
    this.authService.observeAuthState(user => {
      if (user) {
        this.userId = user.uid;
        this.authService.getUserProfile(this.userId).subscribe(data => {
          this.user1 = data;
          this.userName = this.user1.username;
          if(this.user1) {
            this.userProfileForm.controls['username'].setValue(this.user1.username);
            this.userProfileForm.controls['contact'].setValue(this.user1.contact);
            this.userProfileForm.controls['email'].setValue(this.user1.email);
            this.userProfileForm.controls['employment'].setValue(this.user1.employment);
          }
        });
      } else {
        this.user1 = undefined;
      }
    })
    // this.authService.observeAuthState(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //     this.user1 = new UserProfile('', 0, '');
    //     this.userProfileForm = new FormGroup({
    //       username: new FormControl(this.user1.username, [Validators.required]),
    //       contact: new FormControl(this.user1.contact, [Validators.required]),
    //       email: new FormControl(this.user1.email),
    //       employment: new FormControl(this.user1.employment)
    //     });
        // this.authService.getUserProfile(this.userId).subscribe(data => {
        //   this.user = data;
        //   this.userName = this.user.username;
        //   console.log("User: ", this.user);
        //   if (this.user) {
        //     this.userProfileForm.controls['username'].setValue(this.user.username);
        //     this.userProfileForm.controls['contact'].setValue(this.user.contact);
        //     this.userProfileForm.controls['email'].setValue(this.user.email);
        //     this.userProfileForm.controls['employment'].setValue(this.user.employment);
        //   }
        // });
    //   } else {
    //     this.user1 = undefined;
    //   }
    // });
  }

  // uploadFile(file: File, userId: string) {
  //   const filePath = `userFiles/${userId}/${file.name}`;
  // }

  update() {
    if (this.user1 != undefined && this.userProfileForm.valid) {
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

  ngOnInit(){

  }
}
