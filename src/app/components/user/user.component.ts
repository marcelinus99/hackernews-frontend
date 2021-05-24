import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent{
  @Input()
  content: User | undefined; 
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