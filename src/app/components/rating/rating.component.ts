import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  inputName: string;
  starts: any[] = [
    { idx: 1, title: 'Sucks big time', checked: false },
    { idx: 2, title: 'Kinda bad', checked: false },
    { idx: 3, title: 'Meh', checked: false },
    { idx: 4, title: 'Pretty good', checked: false },
    { idx: 5, title: 'Rocks!', checked: false }
  ];
  @Output() setRating: any = new EventEmitter();

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    this.onClick(this.rating);
  }
  onClick(rating: number) {
    setTimeout(() => {
      this.rating = rating;
      this.starts.forEach((s: any) => s.checked = s.idx <= this.rating);
      this.setRating.emit(rating);
    }, 50);
  }
}
