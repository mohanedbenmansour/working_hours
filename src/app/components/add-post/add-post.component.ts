import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 7;
  highValue: number = 9;
  options: Options = {
    floor: 6,
    ceil: 12,
    step: 0.5,
    showTicks: true,
    // translate: (value: number, label: LabelType): string => {
    //   switch (label) {
    //     case LabelType.Low:
    //       return '<b>Min price:</b> $' + value;
    //     case LabelType.High:
    //       return '<b>Max price:</b> $' + value;
    //     default:
    //       return '$' + value;
    //   }
    // },
  };
}
