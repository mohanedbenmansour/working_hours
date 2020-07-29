import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { post } from '../../shared/post';
import { posts } from '../../shared/posts';
@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss'],
})
export class ViewPostsComponent implements OnInit {
  posts: posts[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.readPosts();
  }
  readPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data['msg'];
        console.log(this.posts[0].working_days);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
