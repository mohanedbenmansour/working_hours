import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuardService } from './auth/user.guard';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'addpost',
    component: AddPostComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'viewposts',
    component: ViewPostsComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
