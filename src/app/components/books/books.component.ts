import {Component, Input, OnInit} from '@angular/core';
import { IBook } from '../../../shared/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() book: IBook;
  constructor() { }

  ngOnInit() {
  }
}
