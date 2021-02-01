import {Component} from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  getPostsId(id: number): void {
    this.postService.getPosts(id).subscribe(value => this.posts = value);
  }
}

