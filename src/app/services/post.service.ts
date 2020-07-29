import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  createPost(post) {
    return this.http.post('http://localhost:5000/addpost', post);
  }
  getPosts() {
    return this.http.get('getposts');
  }
}
