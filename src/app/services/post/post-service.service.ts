import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/components/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  getNewest() {
    let url = 'https://hackernews-2020-21.herokuapp.com/newest';

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Post[]>(url, {headers: headers});
  }

  constructor(private http:HttpClient){ }
  
  getNews(){
    let url = 'https://hackernews-2020-21.herokuapp.com/news';

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Post[]>(url, {headers: headers});
  }

  getAsk(){
    let url = 'https://hackernews-2020-21.herokuapp.com/ask';

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Post[]>(url, {headers: headers});
  }

}