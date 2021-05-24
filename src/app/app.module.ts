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
import { NewestComponent } from './components/newest/newest.component'


const routes: Routes = [
  {path: '', component: NewestComponent},
  {path: 'newest', component: NewestComponent},
  {path: 'news', component: NewsComponent},
  {path: 'ask', component: AskComponent}
 
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AskComponent,
    NewsComponent,
    HeaderComponent,
    NewestComponent
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
