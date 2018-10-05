import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() book_name: string;
  @Input() book_author: string;
  @Input() book_image: string;
  @Input() book_rating: string;
  @Input() book_id: string;
  constructor() { }

  ngOnInit() {
  }
}
