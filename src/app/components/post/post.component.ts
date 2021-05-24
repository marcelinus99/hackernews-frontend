import { Component, Input } from '@angular/core';


@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})

export class PostComponent{
    @Input()
    content: Post | undefined;   
}

export type Post = {

    id: number | undefined,
    title: string | undefined,
    tipo: string | undefined,
    url: string | undefined,
    text: string | undefined

}
