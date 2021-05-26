import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Post } from 'src/app/components/post/post.component';
import { Comment } from 'src/app/components/comment/comment.component';
import { User } from 'src/app/components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  getPostComment(id: any) {
    
    let url = 'https://hackernews-2020-21.herokuapp.com/posts/'+ id + '/comments';
    
    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Comment[]>(url, {headers: headers});  }

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

  getPost(id:any) {
    
    let url = 'https://hackernews-2020-21.herokuapp.com/posts/'+ id;
    
    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Post>(url, {headers: headers});
  }


  getAsk(){
    let url = 'https://hackernews-2020-21.herokuapp.com/ask';

    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Post[]>(url, {headers: headers});
  }
}