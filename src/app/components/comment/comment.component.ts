import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  @Input()
  content: Comment | undefined;   
}

export type Comment = {
  id: number | undefined,
  content: string | undefined,
  user_id: number | undefined,
  post_id: number | undefined,
  created_at: string | undefined,
  updated_at: string | undefined,
  parent_id: number | undefined
}

