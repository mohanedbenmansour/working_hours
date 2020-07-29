import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, AddPostComponent, ViewPostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
