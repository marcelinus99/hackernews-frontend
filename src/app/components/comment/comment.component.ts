import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input()
  content: Comment | undefined;   
  show : boolean = false;

  private id: number = 0;

  constructor(private postService:PostServiceService, private router: Router, private route: ActivatedRoute ) {
  
    this.route.params.subscribe( params => {
      this.id = params['id'];
    } );
  }

  onSubmit(value: any) {
    this.postService.reply(value.comment, 32).subscribe();
    this.router.navigate(['/post/'+this.id]);
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}

export type Comment = {
  id: number | undefined,
  content: string | undefined,
  user_id: number | undefined,
  post_id: number | undefined,
  created_at: string | undefined,
  updated_at: string | undefined,
  parent_id: number | undefined,
  full_name: string |undefined,
  image: string | undefined
}

