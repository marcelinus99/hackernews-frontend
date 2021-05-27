import { Component, Input } from '@angular/core';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent{
    @Input()
    content: Post | undefined;   
    show : boolean = false;
    url : boolean = false;
    tipo : boolean = false;
}

export type Post = {
    id: number | undefined,
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
