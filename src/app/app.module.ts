import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AskComponent } from './components/ask/ask.component';
import { Routes, RouterModule} from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { NewestComponent } from './components/newest/newest.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PostShowComponent } from './components/post-show/post-show.component';
import { CommentComponent } from './components/comment/comment.component'
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { UserSubmissionsComponent } from './components/user-submissions/user-submissions.component';
import { UpvotedCommentsComponent } from './components/upvoted-comments/upvoted-comments.component';
import { UpvotedSubmissionsComponent } from './components/upvoted-submissions/upvoted-submissions.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';


const routes: Routes = [
  {path: '', component: NewestComponent},
  {path: 'newest', component: NewsComponent},
  {path: 'news', component: NewestComponent},
  {path: 'ask', component: AskComponent},
  {path: 'post/:id', component: PostShowComponent},
  {path: 'user/:id', component: UserProfileComponent},
  {path: 'user_comments/:id', component: UserCommentsComponent},
  {path: 'threads', redirectTo: '/user_comments/1', pathMatch: 'full'},
  {path: 'submissions/:id', component: UserSubmissionsComponent},
  {path: 'upvoted/comments/:id', component: UpvotedCommentsComponent},
  {path: 'upvoted/submissions/:id', component: UpvotedSubmissionsComponent},
  {path: 'submit', component: SubmitFormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AskComponent,
    NewsComponent,
    HeaderComponent,
    NewestComponent,
    UserComponent,
    UserProfileComponent,
    PostShowComponent,
    UpvotedSubmissionsComponent,
    UpvotedCommentsComponent,
    UserSubmissionsComponent,
    UserCommentsComponent,
    CommentComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormsModule               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
