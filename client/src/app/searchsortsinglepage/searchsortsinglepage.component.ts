import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserData } from '../userdata';

@Component({
  selector: 'app-searchsortsinglepage',
  templateUrl: './searchsortsinglepage.component.html',
  styleUrls: ['./searchsortsinglepage.component.css']
})
export class SearchsortsinglepageComponent {

  query: string;
  orderProp: string;

  view: boolean = false;
  show: boolean = false;
  allData: [];
  data: {
    next: {},
    previous: {},
    results: UserData[]
  };
  page = 1;
  limit = 5;
  currentPage = 1;
  totalRecords: Number;

  @ViewChild('page1') page1: ElementRef;
  @ViewChild('page2') page2: ElementRef;
  @ViewChild('page3') page3: ElementRef;
  @ViewChild('prevItem') prevItem: ElementRef;
  @ViewChild('nextItem') nextItem: ElementRef;
  constructor(private userservice: UserService, private renderer: Renderer2) {
  }
    
  getAllUsers() {
    this.userservice.getAllData().subscribe(data => {
      // console.log(data);
      this.allData = data.results;
      this.totalRecords = this.allData.length;
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

  routeChange() {
    this.view = !this.view;
  }


  getUsers(): UserData[] {
    return this.sortUsers(this.filterUsers(this.data.results));
  }
  
  private filterUsers(users: UserData[]) {
    if (users && this.query) {
      return users.filter(user => {
        let gender = user.gender.toLowerCase();
        let name = user.name.first.toLowerCase();
        let email = user.email.toLowerCase();
        let dob = user.dob.date.toLocaleString();
        this.query = this.query.toLowerCase();
        return dob.indexOf(this.query) >= 0 || gender.indexOf(this.query) >= 0 || name.indexOf(this.query) >= 0 || email.indexOf(this.query) >= 0;
      });
    }
    return users;
  }
  
  private sortUsers(users: UserData[]) {
    if (users && this.orderProp) {

      if (this.orderProp === "first") {
        return users
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a.name[this.orderProp] < b.name[this.orderProp]) {
            return -1;
          } else if ([b.name[this.orderProp] < a.name[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (this.orderProp === "date") {
        return users
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a.dob[this.orderProp] < b.dob[this.orderProp]) {
            return -1;
          } else if ([b.dob[this.orderProp] < a.dob[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      return users
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return users;
  }

  
}