import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();
  @Output() bookBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRateUpBtnClick(movie) {
    this.rateUpBtnClick.emit(movie);
  }

  onRateDownBtnClick(movie) {
    this.rateDownBtnClick.emit(movie);
  }

  onBookBtnClick(movie, theatre) {
    this.bookBtnClick.emit({movie, theatre});
  }

}
