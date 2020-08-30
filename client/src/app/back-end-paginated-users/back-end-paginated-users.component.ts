import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-back-end-paginated-users',
  templateUrl: './back-end-paginated-users.component.html',
  styleUrls: ['./back-end-paginated-users.component.css']
})
export class BackEndPaginatedUsersComponent {

  title = 'Pagination';

  show: boolean = false;
  data = {
    next: {},
    previous: {},
    results: []
  };
  page = 1;
  limit = 5;
  currentPage = 1;
  showNext:any;

  @ViewChild('page1') page1: ElementRef;
  @ViewChild('page2') page2: ElementRef;
  @ViewChild('page3') page3: ElementRef;
  @ViewChild('prevItem') prevItem: ElementRef;
  @ViewChild('nextItem') nextItem: ElementRef;
  constructor(private userservice: UserService, private renderer: Renderer2) {}

  previous(page) {
    if (this.page == this.currentPage && this.page > 1) {
      this.page = this.page -1;
    }
    this.getPagedUsers(page);
  }

  next(page) {
    if (this.page + 2 == this.currentPage) {
      this.page = this.page + 1;
    }
    this.getPagedUsers(page);
  }

  onLimitChange() {
    this.userservice.getPaginatedUsers(2, this.limit).subscribe(data => {
      this.showNext = data.next;
      if (this.showNext === undefined) {
        this.renderer.addClass(this.page3.nativeElement, "disabled");
      } else {
        this.renderer.removeClass(this.page3.nativeElement, "disabled");
      }
    });

    this.userservice.getPaginatedUsers(1, this.limit).subscribe(data => {
      this.showNext = data.next;
      if (this.showNext === undefined) {
        this.renderer.addClass(this.page2.nativeElement, "disabled");
      } else {
        this.renderer.removeClass(this.page2.nativeElement, "disabled");
      }
    });

    this.page = 1;
    this.getPagedUsers(1);
  }

  getPagedUsers(page) {
    this.show = true;
    this.currentPage = page;
    
    this.userservice.getPaginatedUsers(page, this.limit).subscribe(data => {
      this.data = data;
      this.showNext = data.next;
    
      if (this.currentPage == this.page) {
        this.renderer.addClass(this.page1.nativeElement, "active");
        this.renderer.removeClass(this.page2.nativeElement, "active");
        this.renderer.removeClass(this.page3.nativeElement, "active");
      } else if (this.currentPage == this.page + 1) {
        this.renderer.addClass(this.page2.nativeElement, "active");
        this.renderer.removeClass(this.page1.nativeElement, "active");
        this.renderer.removeClass(this.page3.nativeElement, "active");
      } else if (this.currentPage == this.page + 2) {
        this.renderer.addClass(this.page3.nativeElement, "active");
        this.renderer.removeClass(this.page1.nativeElement, "active");
        this.renderer.removeClass(this.page2.nativeElement, "active");
      }

      if (this.currentPage === 1) {
        this.renderer.addClass(this.prevItem.nativeElement, "disabled");
      } else {
        this.renderer.removeClass(this.prevItem.nativeElement, "disabled");
      }

      if (this.showNext === undefined) {
        this.renderer.addClass(this.nextItem.nativeElement, "disabled");
      } else {
        this.renderer.removeClass(this.nextItem.nativeElement, "disabled");
      }

    });
  }

  
}