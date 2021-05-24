import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private postService:PostServiceService){

    this.postService.getNews().subscribe(data=>{
        this.posts=data;
    })
  }

  get getPosts(){
    return this.posts;

  }
  ngOnInit(): void {
  }

}


