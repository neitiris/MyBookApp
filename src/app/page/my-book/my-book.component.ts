import {Component, OnInit} from '@angular/core';
import {
  faArrowCircleDown,
  faCog,
  faQuestionCircle,
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  alerts,
  books,
  filters,
  linksList,
  linksTypes,
  titles,
  users
} from '../../../shared/mock-data';
import { IBook } from '../../../shared/interfaces';

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
  faSearch = faSearch;
  alerts = alerts;
  books = books;
  filters = filters;
  linksList = linksList;
  linksTypes = linksTypes;
  titles = titles;
  users = users;
  constructor() { }

  ngOnInit() {
  }
  public updateBookRating(newRating: number, book: IBook) {
    book.rating = newRating;
  }
}
