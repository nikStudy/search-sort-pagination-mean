import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-back-end-all-users',
  templateUrl: './back-end-all-users.component.html',
  styleUrls: ['./back-end-all-users.component.css']
})
export class BackEndAllUsersComponent {

  title = 'Pagination';

  show: boolean = false;
  allData: [];
  data = {
    next: {},
    previous: {},
    results: []
  };
  page = 1;
  limit = 5;
  currentPage = 1;
  totalRecords:Number;

  @ViewChild('page1') page1: ElementRef;
  @ViewChild('page2') page2: ElementRef;
  @ViewChild('page3') page3: ElementRef;
  @ViewChild('prevItem') prevItem: ElementRef;
  @ViewChild('nextItem') nextItem: ElementRef;
  constructor(private userservice: UserService, private renderer: Renderer2) {}

  getAllUsers() {
    this.userservice.getAllUsers().subscribe(data => {
      console.log(data);
      this.allData = data;
      this.totalRecords = this.allData.length;
      // console.log(this.totalRecords);
      this.show = true;
      this.getPagedUsers(1);
    });
  }

  previous(page) {
    if (this.page == this.currentPage && this.page > 1) {
      this.page = this.page -1;
    }
    this.getPagedUsers(page);
  }

  next(page) {
    if (this.page + 2 == this.currentPage  && (this.page+2)*this.limit < this.totalRecords) {
      this.page = this.page + 1;
    }
    this.getPagedUsers(page);
  }

  getPagedUsers(page) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.limit;
    const endIndex = page * this.limit;

    const results = {
      next: {},
      previous: {},
      results: []
    };

    if (endIndex < this.allData.length) {
          results.next = {
            page: page + 1,
            limit: this.limit
        }
    }
      
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: this.limit
        }
    }

    results.results = this.allData.slice(startIndex, endIndex);

    this.data = results;
    // console.log(this.data);

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

    if ((this.currentPage)*this.limit >= this.totalRecords) {
      this.renderer.addClass(this.nextItem.nativeElement, "disabled");
    } else {
      this.renderer.removeClass(this.nextItem.nativeElement, "disabled");
    }
    
  }

  
}