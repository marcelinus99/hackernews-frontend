import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})


export class AskComponent implements OnInit {
  
  private posts: Post[] = [];

  constructor(private postService:PostServiceService){

    this.postService.getAsk().subscribe(data=>{
        this.posts=data;
        
    })

  }

  get getPosts(){
    return this.posts;
  }

  ngOnInit(): void {
  }

}
