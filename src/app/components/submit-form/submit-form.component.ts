import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  constructor(private postService:PostServiceService, private router: Router ) { }

  onSubmit(value: any) {
    console.log(value.title + " " + value.url + " " +value.text);
    
    this.postService.post(value.title,value.text,value.url).subscribe();
    this.router.navigate(['/news']);
  }
  ngOnInit(): void {
  }

}
