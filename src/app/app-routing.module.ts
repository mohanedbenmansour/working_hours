import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
const routes: Routes = [
  { path: 'addpost', component: AddPostComponent },
  { path: 'viewposts', component: ViewPostsComponent },
  { path: '', redirectTo: '/addpost', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
