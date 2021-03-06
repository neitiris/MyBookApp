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
  USERS,
  TITLE
} from '../../../shared/mock-data';
import { IBook } from '../../../shared/interfaces';
import * as _ from 'lodash';

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
  title: string;

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
          this.title = TITLE[0].title;
          break;
        case 'recent':
          this.booksFiltered = _.orderBy(this.books, ['createdAt'], ['desc']);
          this.title = TITLE[1].title;
          break;
        case 'popular':
          this.booksFiltered = _.filter(this.books, (b: IBook) => b.rating > 2);
          this.title = TITLE[2].title;
          break;
        case 'price':
          this.booksFiltered = _.filter(this.books, (b: IBook) => !b.price);
          this.title = TITLE[3].title;
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

  public showNewBookBlock() {
    const newBook: IBook = {
      id: 0,
      name: '',
      author: '',
      price: 0,
      createdAt: (new Date).toISOString(),
      rating: 0
    };
    this.books.unshift(newBook);
    this.filterBooksBy(this.filterOption);
  }

  public discardNewBook() {
    this.books = _.filter(this.books, (b: IBook) => b.id);
    this.filterBooksBy(this.filterOption);
  }

  public createNewBook(newBook: IBook) {
    newBook.img = '../../../assets/book-cover(5).png';
    newBook.id = this.books[this.books.length - 1].id++;
    this.books.push(newBook);
    this.filterBooksBy(this.filterOption);
  }
}
