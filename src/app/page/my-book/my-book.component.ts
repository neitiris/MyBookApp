import { Component, OnInit } from '@angular/core';
import {
  faArrowCircleDown,
  faCog,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.scss']
})
export class MyBookComponent implements OnInit {
  faArrowCircleDown = faArrowCircleDown;
  faCog = faCog;
  faQuestionCircle = faQuestionCircle;
  users = [
    {img: '../../../assets/img_avatar.png', name: 'John Doe'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
