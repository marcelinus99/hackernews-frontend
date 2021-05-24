import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private postService:PostServiceService){

    this.postService.getNewest().subscribe(data=>{
        this.posts=data;
    })
  
  }

  get getPosts(){
    return this.posts;

  }
  ngOnInit(): void {
  }

}
