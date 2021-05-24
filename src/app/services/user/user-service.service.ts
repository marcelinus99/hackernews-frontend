import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/user/user.component';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  getMyProfile() {
    let url = 'https://hackernews-2020-21.herokuapp.com/users/1';

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
      
    return this.http.get<User[]>(url, {headers: headers});
  }
  constructor(private http:HttpClient) { }
}
