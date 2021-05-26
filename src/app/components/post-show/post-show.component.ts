import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent {

  private post: Post | undefined;

  
  constructor(private postService:PostServiceService, private route: ActivatedRoute){
    
    this.route.params.subscribe( params => {

     this.postService.getPost(params['id']).subscribe(data=>{
        this.post=data;
    })

    } );

  }

  get getPost(){
    return this.post;
  }
}


