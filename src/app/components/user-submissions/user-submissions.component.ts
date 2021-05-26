import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Post } from '../post/post.component';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})

export class UserSubmissionsComponent {

  private posts: Post[] = [];

    constructor(private postService:PostServiceService, private userService:UserServiceService, private route: ActivatedRoute){
    
      this.route.params.subscribe( params => {
       
      this.postService.getUserSubmissions(params['id']).subscribe(data=>{
          this.posts=data;
          this.posts.forEach(post => {
            if(post.user_id)
            this.userService.getMyProfile(post.user_id).subscribe(data=>{
              post.full_name = data.full_name;
              post.image = data.avatar_url;
            })
          });
      })

  
      } );
  
    }

  get getUserSubmissions(){
    return this.posts;
  }

}
