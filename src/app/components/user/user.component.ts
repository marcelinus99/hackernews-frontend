import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent{
  @Input()
  content: User | undefined; 
  condition = 1;
  private id: number = 0;

  constructor(private userService:UserServiceService, private router: Router, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    } );
  }


  onSubmit(value: any) {
    console.log(this.id, value.about);
    this.userService.changeAbout(this.id, value.about).subscribe();
    this.router.navigate(['/post/'+this.id]);
    }


  reloadCurrentPage() {
    window.location.reload();
  }
}

export type User = {
  id: number | undefined,
  email: string | undefined,
  full_name: string | undefined,
  uid: number | undefined,
  avatar_url: string | undefined,
  created_at: string | undefined,
  updated_at: string | undefined,
  api_key: string | undefined,
  about: string | undefined
}

