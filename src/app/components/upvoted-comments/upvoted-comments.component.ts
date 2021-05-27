import { Component } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Comment } from '../comment/comment.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-upvoted-comments',
  templateUrl: './upvoted-comments.component.html',
  styleUrls: ['./upvoted-comments.component.css']
})

export class UpvotedCommentsComponent  {  
    private comments: Comment[] = []; 
    
    constructor(private postService:PostServiceService, private userService:UserServiceService, private route: ActivatedRoute){
      
      this.route.params.subscribe( params => {
  
      this.postService.getUpvotedComments(params['id']).subscribe(data=>{
          this.comments=data;
          this.comments.forEach(comment => {
            if(comment.user_id)
            this.userService.getMyProfile(comment.user_id).subscribe(data=>{
              comment.full_name = data.full_name;
              comment.image = data.avatar_url;
            })
          });
      })
  
      } );
  
    }
  
    get getUserComments(){
      return this.comments;
    }
  }
