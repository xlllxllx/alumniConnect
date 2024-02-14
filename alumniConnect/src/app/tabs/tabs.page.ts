import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isAdmin = false;
  isStudent = false;
  constructor(private authService: AuthService) {
    this.authService.observeAuthState(user => {
      if(user && user.email == 'admin@nyp.sg') {
        this.isAdmin = true;
        this.isStudent = false;
      } 
      else if(user && user.email == 'student@nyp.sg') {
        this.isAdmin = false;
        this.isStudent = true;
      }
      else {
        this.isAdmin = false;
        this.isStudent = false;
      }
    })
  }

}
