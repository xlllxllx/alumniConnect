import { Component } from '@angular/core';
import { Jobs } from '../shared/models/Jobs';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { LoginPage } from '../login/login.page';
import { UserProfile } from '../shared/models/UserProfile';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: UserProfile;
  userName: string;
  jobs: Jobs[] = [];
  
  constructor(private modalController: ModalController,
              private authService: AuthService) {
    this.jobs = [
      new Jobs('Software Engineer', 50000, 'Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes.', 'assets/images/jobs0.jpeg', '1'),
      new Jobs('Data Scientist', 60000, 'A data scientist is someone who makes value out of data. By fetching information from various sources and analyzes it for better understanding about how the business performs.', 'assets/images/jobs1.jpeg', '2'),
      new Jobs('Business Analyst', 40000, 'A business analyst is someone who analyzes an organization or business domain (real or hypothetical) and documents its business, processes, or systems, assessing the business model.', 'assets/images/jobsBA.jpeg', '3'),
      new Jobs('Web Developer', 30000, 'A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.', 'assets/images/developer.jpeg', '4'),
      new Jobs('Software Tester', 25000, 'Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test.', 'assets/images/softwaretester.jpeg', '5'),
      new Jobs('Cloud Architect', 70000, 'A cloud architect is an IT professional who is responsible for overseeing a company\'s cloud computing strategy.', 'assets/images/cloudjob.jpeg', '6'),
      new Jobs('Data Engineer', 60000, 'A data engineer is a worker whose primary job responsibilities involve preparing data for analytical or operational uses.', 'assets/images/jobs2.jpeg', '7'),
      new Jobs('Data Analyst', 50000, 'A data analyst is someone who scrutinises information using data analysis tools.', 'assets/images/jobs4.jpeg', '8'),
      new Jobs('DevOps Engineer', 70000, 'DevOps engineers are IT professionals who collaborate with software developers, system operators and other IT staff members to manage code releases.', 'assets/images/devops.png', '9'),
      new Jobs('Product Manager', 80000, 'A product manager is a professional role that is responsible for the development of products for an organization, known as the practice of product management.', 'assets/images/prodmanager.jpeg', '10'),
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
