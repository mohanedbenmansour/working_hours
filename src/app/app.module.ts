import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AddPostComponent, ViewPostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
