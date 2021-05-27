import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Post } from 'src/app/components/post/post.component';
import { Comment } from 'src/app/components/comment/comment.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  vote_post(id: number) {
    let url = 'http://3.237.175.118:8080/posts/' + id + '/vote';
    const headers = { 'X-API-KEY': 'CNG0dlVS4LmVM1chV5Zp27HSY50qx39h', 'accept': 'application/json','Content-Type': 'application/json'};
    return this.http.post<any>(url, { headers });  
  }

  vote_comment(id: number) {
    let url = 'https://hackernews-2020-21.herokuapp.com/comments/' + id + '/vote';
    const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    return this.http.post<any>(url, { headers });  
  }

  reply(comment: string, id: number) {
    let url = 'https://hackernews-2020-21.herokuapp.com/comments/new/' + id;
    const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    const body = {content: comment,
                  parent_id: id};
    return this.http.post<any>(url, body, { headers });
  }
  
  comment(comment: string, id: number) {
    let url = 'https://hackernews-2020-21.herokuapp.com/comments/';
    const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    const body = {content: comment,
                  post_id: id};
    return this.http.post<any>(url, body, { headers });
  }

  post(titulo:string, texto: string, urlparameter:string){
    let url = 'https://hackernews-2020-21.herokuapp.com/posts/';
    const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    const body = {title: titulo,
                  text: texto,
                  url: urlparameter};
    return this.http.post<any>(url, body, { headers });

  }
   
  
  getPostComment(id: number) {
    
    let url = 'https://hackernews-2020-21.herokuapp.com/posts/'+ id + '/comments';
    
    const headers = new HttpHeaders({
      
      Accept: 'application/json'
    
    });
  
    return this.http.get<Comment[]>(url, {headers: headers});  }

    
    getUserComments(id:number){
      let url = 'https://hackernews-2020-21.herokuapp.com/user_comments/' + id;
  
      const headers = new HttpHeaders({
        
        Accept: 'application/json'
      
      });
    
      return this.http.get<Comment[]>(url, {headers: headers});
    }

    getUserSubmissions(id:number){
      let url = 'https://hackernews-2020-21.herokuapp.com/submissions/' + id;

      const headers = new HttpHeaders({
        
        Accept: 'application/json'
      
      });
    
      return this.http.get<Post[]>(url, {headers: headers});
    }

    getUpvotedSubmissions(id:number){
      let url = 'https://hackernews-2020-21.herokuapp.com/upvoted/submissions/' + id;

      const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};

      return this.http.get<Post[]>(url, {headers: headers});
    }

    getUpvotedComments(id:number){
      let url = 'https://hackernews-2020-21.herokuapp.com/upvoted/comments/' + id;
      
      const headers = { 'X-API-KEY': 'mKmm51zupywCiNdmgRAjPvBxOXpsc77u', 'accept': 'application/json','Content-Type': 'application/json'};
    
      return this.http.get<Comment[]>(url, {headers: headers});
    }
      

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

    getPost(id:number) {
      
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