import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { posts } from '../../shared/posts';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { trigger, transition } from '@angular/animations';
import { UserService } from '../../services/user.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { strict } from 'assert';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  /* fab icons */
  faTrashAlt = faTrashAlt;
  faExclamationTriangle = faExclamationTriangle;
  newPost: posts;
  PostArray: posts[] = [];
  value1: '';
  value3: '';
  hoursString = '';
  constructor(
    private postService: PostService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeMatrix();
  }
  /* number of iteration to generate components */
  boucle: Array<number> = [0, 1, 2, 3, 4, 5, 6];
  /* to dynamically generate the days of the week*/
  dayName: Array<string> = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  selectedOption: Array<string> = ['', '', '', '', '', '', ''];
  /*array of active working days */
  day: Array<boolean> = [false, true, true, true, true, true, true];
  /* for starting hours */
  value: Array<String> = [];
  /* for ending hours */
  highValue: Array<String> = [];
  /* for extra working hours */
  values: String[][] = [];
  highValues: String[][] = [];
  /* the number of times we add extra working hours for each day */
  addMoreHours: number[] = [];
  /* to intialise all the values */
  initializeMatrix() {
    for (var i = 0; i < 7; i++) {
      this.addMoreHours[i] = 0;
      this.values[i] = [];
      this.highValues[i] = [];
      for (var j = 0; j < 3; j++) {
        this.values[i][j] = '07:00 am';
        this.highValues[i][j] = '09:00 pm';
      }
    }
  }

  onClick() {
    this.addWorkingHours();

    // this.postService.createPost(this.working_hours).subscribe(
    //   (data) => {
    //     this.working_hours = [];
    //     alert('Post added successfully');
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  addWorkingHours() {
    for (let i = 0; i < 7; i++)
      if (this.day[i] == true) {
        this.newPost = {
          day: this.dayName[i],
          working_hours: [],
        };
        if (this.addMoreHours[i] == 0) {
          this.hoursString = this.values[i][0] + '-' + this.highValues[i][0];
          this.newPost.working_hours.push(this.hoursString);
          this.PostArray.push(this.newPost);
        } else if (this.addMoreHours[i] == 1) {
          this.hoursString = this.values[i][0] + '-' + this.highValues[i][0];
          this.newPost.working_hours.push(this.hoursString);
          this.hoursString = this.values[i][1] + '-' + this.highValues[i][1];
          this.newPost.working_hours.push(this.hoursString);
          this.PostArray.push(this.newPost);
        } else {
          this.hoursString = this.values[i][0] + '-' + this.highValues[i][0];
          this.newPost.working_hours.push(this.hoursString);
          this.hoursString = this.values[i][1] + '-' + this.highValues[i][1];
          this.newPost.working_hours.push(this.hoursString);
          this.hoursString = this.values[i][2] + '-' + this.highValues[i][2];
          this.newPost.working_hours.push(this.hoursString);
          this.PostArray.push(this.newPost);
        }
      }
  }
  getDay(i: number) {
    switch (i) {
      case 0: {
        return 'sunday';
      }
      case 1: {
        return 'monday';
      }
      case 2: {
        return 'tuesday';
      }
      case 3: {
        return 'wednesday';
      }
      case 4: {
        return 'thursday';
      }
      case 5: {
        return 'friday';
      }
      case 6: {
        return 'saturday';
      }
    }
  }
  /* to add or remove extra hours */
  addHours(param) {
    this.addMoreHours[param]++;
  }

  removeHours(param) {
    this.addMoreHours[param]--;
  }
  /* to make comparison between starting hours and ending ones */
  checkValidEndTime(start, end) {
    if (start.slice(6) == 'am' && end.slice(6) == 'pm') return true;
    else if (start.slice(6) == 'pm' && end.slice(6) == 'am') return false;
    else if (start.slice(0, 5) < end.slice(0, 5)) return true;
    else if (start.slice(0, 5) > end.slice(0, 5)) return false;

    return false;
  }
  logout() {
    this.userService.deleteToken();

    this.router.navigateByUrl('/home');
  }
}
