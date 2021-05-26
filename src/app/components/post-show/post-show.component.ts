import { Component, Input } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';
import { Comment } from '../comment/comment.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent {

  private post: Post | undefined;
  private comments: Comment[] = []; 
  
  constructor(private postService:PostServiceService, private route: ActivatedRoute){
    
    this.route.params.subscribe( params => {

     this.postService.getPost(params['id']).subscribe(data=>{
        this.post=data;
    })

    this.postService.getPostComment(params['id']).subscribe(data=>{
        this.comments=data;
    })

    } );

  }

  get getPost(){
    return this.post;
  }

  get getPostComments(){
    return this.comments;
  }
}


