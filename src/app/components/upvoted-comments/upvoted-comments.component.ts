import { Component, Input } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { User } from '../user/user.component';
import { Comment } from '../comment/comment.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-upvoted-comments',
  templateUrl: './upvoted-comments.component.html',
  styleUrls: ['./upvoted-comments.component.css']
})

export class UpvotedCommentsComponent  {  
    private user: User | undefined;
    private comments: Comment[] = []; 
    
    constructor(private postService:PostServiceService, private userService:UserServiceService, private route: ActivatedRoute){
      
      this.route.params.subscribe( params => {
  
       this.userService.getMyProfile(params['id']).subscribe(data=>{
          this.user=data;
      })
  
      this.postService.getUpvotedComments(params['id']).subscribe(data=>{
          this.comments=data;
      })
  
      } );
  
    }
  
    get getUser(){
      return this.user;
    }
  
    get getUserComments(){
      return this.comments;
    }
  }
