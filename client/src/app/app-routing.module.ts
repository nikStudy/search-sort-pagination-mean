import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BackEndAllUsersComponent } from './back-end-all-users/back-end-all-users.component';
import { BackEndPaginatedUsersComponent } from './back-end-paginated-users/back-end-paginated-users.component';
import { SearchSortAllDataComponent } from './search-sort-all-data/search-sort-all-data.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchsortComponent } from './searchsort/searchsort.component';
import { SearchsortsinglepageComponent } from './searchsortsinglepage/searchsortsinglepage.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'allusers', component: BackEndAllUsersComponent},
  {path: 'paginatedusers', component: BackEndPaginatedUsersComponent},
  {path: 'searchsortallpages', component: SearchSortAllDataComponent},
  {path: 'paginationexamples', component: PaginationComponent},
  {path: 'searchsortexamples', component: SearchsortComponent},
  {path: 'searchsortsinglepage', component: SearchsortsinglepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
