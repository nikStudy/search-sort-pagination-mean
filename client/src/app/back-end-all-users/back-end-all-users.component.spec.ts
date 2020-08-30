import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndAllUsersComponent } from './back-end-all-users.component';

describe('BackEndAllUsersComponent', () => {
  let component: BackEndAllUsersComponent;
  let fixture: ComponentFixture<BackEndAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
