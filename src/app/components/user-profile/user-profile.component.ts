import { Component, Input } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { User } from '../user/user.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  private users: User | undefined;

  constructor(private userService:UserServiceService, private route: ActivatedRoute){

    this.route.params.subscribe( params => {

    this.userService.getMyProfile(params['id']).subscribe(data=>{
        this.users=data;
    })

  } );
}

  get getUser(){
    return this.users;
  }
}
