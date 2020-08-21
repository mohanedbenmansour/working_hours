import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { post } from '../../shared/post';
import { posts } from '../../shared/posts';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss'],
})
export class ViewPostsComponent implements OnInit {
  posts: any;
  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readPosts();
  }
  readPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    this.userService.deleteToken();

    this.router.navigateByUrl('/home');
  }
}
