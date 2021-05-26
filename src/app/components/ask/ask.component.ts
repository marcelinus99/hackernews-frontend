import { Component, Input } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Post } from '../post/post.component';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})


export class AskComponent  {
  
  private posts: Post[] = [];

  constructor(private postService:PostServiceService, private userService:UserServiceService){

    this.postService.getAsk().subscribe(data=>{
        this.posts=data;
        this.posts.forEach(post => {
          if(post.user_id)
          this.userService.getMyProfile(post.user_id).subscribe(data=>{
            post.full_name = data.full_name;
            post.image = data.avatar_url;
          })
        });
    })

  }

  get getPosts(){
    return this.posts;
  }

  ngOnInit(): void {
  }

}
