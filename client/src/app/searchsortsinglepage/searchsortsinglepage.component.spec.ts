import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsortsinglepageComponent } from './searchsortsinglepage.component';

describe('SearchsortsinglepageComponent', () => {
  let component: SearchsortsinglepageComponent;
  let fixture: ComponentFixture<SearchsortsinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsortsinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsortsinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
