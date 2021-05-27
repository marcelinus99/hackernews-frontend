import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input()
  content!: Comment;   
  show : boolean = false;

  constructor(private postService:PostServiceService, private router: Router ) {
  }

  onSubmit(value: any) {
    this.postService.reply(value.comment, 32).subscribe();
    this.router.navigate(['/post/'+this.content.id]);
  }

  onVote(){
    this.postService.vote_comment(this.content.id).subscribe();
  }


  reloadCurrentPage() {
    window.location.reload();
   }

}

export type Comment = {
  id: number | 0,
  content: string | undefined,
  user_id: number | undefined,
  post_id: number | undefined,
  created_at: string | undefined,
  updated_at: string | undefined,
  parent_id: number | undefined,
  full_name: string |undefined,
  image: string | undefined
}

