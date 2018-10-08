import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { IBook } from '../../../shared/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() book: IBook;
  @Output() setRating: any = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public rate(rating: number) {
    this.setRating.emit(rating);
  }
}
