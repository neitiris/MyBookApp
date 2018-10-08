import {Component, OnInit} from '@angular/core';
import {
  faArrowCircleDown,
  faCog,
  faQuestionCircle,
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  ALERTS,
  BOOKS,
  FILTERS,
  LINKS_LIST,
  LINKS_TYPES,
  USERS
} from '../../../shared/mock-data';
import { IBook } from '../../../shared/interfaces';
import * as _ from 'lodash';
import {s} from '@angular/core/src/render3';

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
  alerts = ALERTS;
  books: IBook[] = BOOKS;
  booksFiltered: IBook[] = [];
  filters = FILTERS;
  linksList = LINKS_LIST;
  linksTypes = LINKS_TYPES;
  users = USERS;
  filterOption = 'all';
  searchString = '';

  constructor() { }

  ngOnInit() {
    this.filterBooksBy(this.filterOption);
  }

  public updateBookRating(newRating: number, book: IBook) {
    this.books.forEach((b: IBook) => {
      if (b.id === book.id) {
        b.rating = newRating;
      }
    });
    this.filterBooksBy(this.filterOption);
  }

  public filterBooksBy(param: string) {
    if (param) {
      this.filterOption = param;
      switch (param) {
        case 'all':
          this.booksFiltered = _.clone(this.books);
          break;
        case 'recent':
          this.booksFiltered = _.orderBy(this.books, ['createdAt'], ['desc']);
          break;
        case 'popular':
          this.booksFiltered = _.filter(this.books, (b: IBook) => b.rating > 2);
          break;
        case 'price':
          this.booksFiltered = _.filter(this.books, (b: IBook) => !b.price);
          break;
      }
    }
  }

  public searchBook(value: string) {
    value = value.toLowerCase();
    this.filterBooksBy(this.filterOption);
    this.booksFiltered = _.filter(this.booksFiltered, (b: IBook) => {
      return b.name.toLowerCase().indexOf(value) !== -1 || b.author.toLowerCase().indexOf(value) !== -1;
    });
  }
}
