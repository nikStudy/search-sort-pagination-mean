import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BackEndAllUsersComponent } from './back-end-all-users/back-end-all-users.component';
import { BackEndPaginatedUsersComponent } from './back-end-paginated-users/back-end-paginated-users.component';
import { SearchSortAllDataComponent } from './search-sort-all-data/search-sort-all-data.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SearchsortComponent } from './searchsort/searchsort.component';
import { SearchsortsinglepageComponent } from './searchsortsinglepage/searchsortsinglepage.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    BackEndAllUsersComponent,
    BackEndPaginatedUsersComponent,
    SearchSortAllDataComponent,
    PaginationComponent,
    MainpageComponent,
    SearchsortComponent,
    SearchsortsinglepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
