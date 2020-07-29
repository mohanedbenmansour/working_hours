import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.value[0]);
  }
  monday = true;
  tuesday = false;
  wednesday = false;
  thursday = false;
  friday = false;
  saturday = false;
  sunday = false;
  value: Array<number> = [7, 7, 7, 7, 7, 7, 7];
  highValue: Array<number> = [9, 9, 9, 9, 9, 9, 9];
  options: Options = {
    floor: 6,
    ceil: 12,
    step: 0.5,
  };
}
