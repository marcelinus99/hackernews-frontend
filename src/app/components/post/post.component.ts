import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent{
    @Input()
    content!: Post;   
    show : boolean = false;
    url : boolean = false;
    tipo : boolean = false;

    constructor(private postService:PostServiceService, private router: Router) {
  }

    onSubmit() {
      this.postService.vote_post(this.content.id).subscribe();
      //this.router.navigate(['/news']);
    }
  
}

export type Post = {
    id: number | 0,
    title: string | undefined,
    tipo: string | undefined,
    url: string | undefined,
    text: string | undefined,
    upvotes: string | undefined,
    created_at: string | undefined,
    user_id: number | undefined,
    full_name: string | undefined,
    image: string | undefined
}
