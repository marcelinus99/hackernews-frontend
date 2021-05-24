import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private users: User[] = [];

  constructor(private userService:UserServiceService){

    this.userService.getMyProfile().subscribe(data=>{
        this.users=data;
    })

  }

  get getUser(){
    return this.users;
  }
  
  ngOnInit(): void {
  }

}
