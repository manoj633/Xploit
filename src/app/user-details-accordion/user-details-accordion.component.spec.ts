import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsAccordionComponent } from './user-details-accordion.component';

describe('UserDetailsAccordionComponent', () => {
  let component: UserDetailsAccordionComponent;
  let fixture: ComponentFixture<UserDetailsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
