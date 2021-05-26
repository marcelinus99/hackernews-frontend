import { Component, Input } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { User } from '../user/user.component';
import { Post } from '../post/post.component';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})

export class UserSubmissionsComponent {

  private user: User | undefined; 
  private posts: Post[] = [];

    constructor(private postService:PostServiceService, private userService:UserServiceService, private route: ActivatedRoute){
    
      this.route.params.subscribe( params => {
  
        this.userService.getMyProfile(params['id']).subscribe(data=>{
          this.user=data;
      })
      
       this.postService.getUserSubmissions(params['id']).subscribe(data=>{
          this.posts=data;
      })

  
      } );
  
    }

  get getUser(){
      return this.user;
  }
  
  get getUserSubmissions(){
    return this.posts;
  }
}
