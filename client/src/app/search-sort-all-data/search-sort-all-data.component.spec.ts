import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortAllDataComponent } from './search-sort-all-data.component';

describe('SearchSortAllDataComponent', () => {
  let component: SearchSortAllDataComponent;
  let fixture: ComponentFixture<SearchSortAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSortAllDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
