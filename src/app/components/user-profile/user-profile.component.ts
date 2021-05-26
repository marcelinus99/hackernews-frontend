import { Component, Input } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  private users: User | undefined;

  constructor(private postService:PostServiceService){

    this.postService.getMyProfile().subscribe(data=>{
        this.users=data;
    })

  }

  get getUser(){
    return this.users;
  }
  

}
