import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IBook } from '../../../shared/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() book: IBook;
  @Output() setRating: any = new EventEmitter();
  @Output() createBook: any = new EventEmitter();
  @Output() discardBook: any = new EventEmitter();
  FaPlus: any = faPlus;

  constructor() { }

  ngOnInit() {
  }
  public rate(rating: number) {
    this.setRating.emit(rating);
  }
  public newBook(newBook: IBook) {
    this.createBook.emit(newBook);
  }
  public discardNewBook() {
    this.discardBook.emit();
  }
}
