import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {

  private id: number = 0;

  constructor(private postService:PostServiceService, private router: Router, private route: ActivatedRoute ) {
  
    this.route.params.subscribe( params => {
      this.id = params['id'];
    } );
  }

  onSubmit(value: any) {
    this.postService.comment(value.comment, this.id).subscribe();
    this.router.navigate(['/post/'+this.id]);
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}