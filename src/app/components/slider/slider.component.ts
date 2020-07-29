import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 7;
  highValue: number = 9;
  options: Options = {
    floor: 6,
    ceil: 12,
    step: 0.5,
  };
}
