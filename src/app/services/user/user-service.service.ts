import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/user/user.component';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http:HttpClient) { }

  getMyProfile(id : any) {
    
    let url = 'https://hackernews-2020-21.herokuapp.com/users/'+ id;

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
      
    return this.http.get<User>(url, {headers: headers});
  }

}
