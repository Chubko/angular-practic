import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {FullUserComponent} from './components/full-user/full-user.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {PostResolveService} from './services/resolve/post-resolve.service';

const routes = [{
  path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [{
    path: ':id', component: FullUserComponent
  }]
},
  {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [{
      path: ':id', component: FullPostComponent
    }]
  },
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  }];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


