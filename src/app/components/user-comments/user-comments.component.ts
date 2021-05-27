import { Component, Input } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Comment } from '../comment/comment.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})

export class UserCommentsComponent {
  
  private comments: Comment[] = []; 
  
  constructor(private postService:PostServiceService, private userService:UserServiceService, private route: ActivatedRoute){
    
    this.route.params.subscribe( params => {

      this.postService.getUserComments(params['id']).subscribe(data=>{
        this.comments=data;
        var p = this.comments;
        p.forEach(comment => {
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
