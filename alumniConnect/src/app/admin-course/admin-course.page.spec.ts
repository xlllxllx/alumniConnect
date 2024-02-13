import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCoursePage } from './admin-course.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

describe('AdminCoursePage', () => {
  let component: AdminCoursePage;
  let fixture: ComponentFixture<AdminCoursePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCoursePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
