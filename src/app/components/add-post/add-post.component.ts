import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { post } from '../../shared/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  newPost: post;
  working_hours: post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.value[0]);
  }
  boucle: Array<number> = [0, 1, 2, 3, 4, 5, 6];
  dayName: Array<string> = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  selectedOption: Array<string> = ['', '', '', '', '', '', ''];
  day: Array<boolean> = [true, false, false, false, false, false, false];
  value: Array<number> = [7, 7, 7, 7, 7, 7, 7];
  highValue: Array<number> = [10, 10, 10, 10, 10, 10, 10];
  options: Options = {
    floor: 6,
    ceil: 12,
    step: 0.5,
  };
  value2: Array<number> = [14, 14, 14, 14, 14, 14, 14];
  highValue2: Array<number> = [16, 16, 16, 16, 16, 16, 16];
  options2: Options = {
    floor: 12,
    ceil: 19,
    step: 0.5,
  };
  onClick() {
    this.addWokringHours();
    console.log(this.working_hours);
    this.postService.createPost(this.working_hours).subscribe(
      (data) => {
        this.working_hours = [];
        alert('Post added successfully');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addWokringHours() {
    for (let i = 0; i < 7; i++)
      if (this.day[i] == true) {
        this.newPost = {
          day: this.getDay(i),
          start: this.value[i].toString(),
          end: this.highValue[i].toString(),
        };
        this.working_hours.push(this.newPost);
      }
  }
  getDay(i: number) {
    switch (i) {
      case 0: {
        return 'monday';
      }
      case 1: {
        return 'tuesday';
      }
      case 2: {
        return 'wednesday';
      }
      case 3: {
        return 'thursday';
      }
      case 4: {
        return 'friday';
      }
      case 5: {
        return 'saturday';
      }
      case 6: {
        return 'sunday';
      }
    }
  }
}
