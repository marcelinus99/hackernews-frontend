import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/user/user.component';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http:HttpClient) { }

  getMyProfile(id : number) {
    
    let url = 'https://hackernews-2020-21.herokuapp.com/users/'+ id;

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
      
    return this.http.get<User>(url, {headers: headers});
  }

  changeAbout(id: number, about: string){
    let url = 'https://hackernews-2020-21.herokuapp.com/users/' + id;
    const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    const body = {about: about};
    return this.http.put<any>(url, body, { headers });

  }

}
