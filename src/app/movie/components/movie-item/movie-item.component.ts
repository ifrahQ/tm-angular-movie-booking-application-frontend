import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movie;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();
  @Output() bookBtnClick = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('on init');
    const theatres = this.movieService.getTheatres();
    this.movie.theatres = this.movie.theatres
      .map(id => theatres.find(t => t.id == id));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes', changes);
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  onRateUpBtnClick(movie) {
    this.rateUpBtnClick.emit(movie);
  }

  onRateDownBtnClick(movie) {
    this.rateDownBtnClick.emit(movie);
  }

  onBookBtnClick(movie, theatre) {
    this.bookBtnClick.emit({ movie, theatre });
  }

}
