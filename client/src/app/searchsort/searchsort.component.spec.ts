import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsortComponent } from './searchsort.component';

describe('SearchsortComponent', () => {
  let component: SearchsortComponent;
  let fixture: ComponentFixture<SearchsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
