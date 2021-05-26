import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/user/user.component';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http:HttpClient) { }
}
