import { Component, OnInit } from '@angular/core';
import {
  faArrowCircleDown,
  faCog,
  faQuestionCircle,
  faPlus,
  faBook,
  faGlobeAmericas,
  faShoppingCart,
  faStar,
  faClock,
  faListAlt,
  faCircle
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
  faPlus = faPlus;
  users = [
    {img: '../../../assets/img_avatar.png', name: 'John Doe'}
  ];
  linksList = [
    {icon: faBook, name: 'Now Reading', radio: 'radio1'},
    {icon: faGlobeAmericas, name: 'Browse', radio: 'radio2'},
    {icon: faShoppingCart, name: 'Buy Books', radio: 'radio3'},
    {icon: faStar, name: 'Favorite Books', radio: 'radio4'},
    {icon: faListAlt, name: 'WishList', radio: 'radio5'},
    {icon: faClock, name: 'History', radio: 'radio7'}
  ];
  linksTypes = [
    {icon: faCircle, name: 'Must Read Titles', radio2: 'radio8', class: 'red'},
    {icon: faCircle, name: 'Best Of List', radio2: 'radio9', class: 'orange'},
    {icon: faCircle, name: 'Classic Novels', radio2: 'radio10', class: 'blue'},
    {icon: faCircle, name: 'Non Fiction', radio2: 'radio11', class: 'violete'},
  ];
  alerts = [
    {icon: faClock, name: 'You added Fight Club by Chuck Palahniuk to your Must Read Title', time: '48 minutes ago'},
    {icon: faClock, name: 'You added Fight Club by Chuck Palahniuk to your Must Read Title', time: '48 minutes ago'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
