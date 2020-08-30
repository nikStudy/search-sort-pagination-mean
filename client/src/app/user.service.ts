import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    const url = "https://randomuser.me/api/?results=100";
    return this.http.get<any>(url);
  }

  getAllUsers(): Observable<any> {
    const url = "http://localhost:3000/allusers/";
    return this.http.get<any>(url);
  }

  getPaginatedUsers(page, limit): Observable<any> {
    const url = "http://localhost:3000/users";
    return this.http.get<any>(url + '?page=' + page + '&limit=' + limit);
  }

}
