import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  constructor(private postService:PostServiceService) { }

  onSubmit(value: any) {
    console.log(value.title + " " + value.url + " " +value.text);
    
    this.postService.post(value.title,value.text,value.url).subscribe();
  }
  ngOnInit(): void {
  }

}
