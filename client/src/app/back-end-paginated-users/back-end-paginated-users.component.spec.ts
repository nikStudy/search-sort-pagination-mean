import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndPaginatedUsersComponent } from './back-end-paginated-users.component';

describe('BackEndPaginatedUsersComponent', () => {
  let component: BackEndPaginatedUsersComponent;
  let fixture: ComponentFixture<BackEndPaginatedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndPaginatedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndPaginatedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
