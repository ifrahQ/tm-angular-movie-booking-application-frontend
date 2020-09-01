import { BookingService } from './../../services/booking.service';
import { MovieService } from './../../services/movie.service';
import { Movie, Booking, Theatre } from './../../../shared/models/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  myBookings: Booking[];

  constructor(
    private movieService: MovieService,
    private bookingService: BookingService  
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.myBookings = this.bookingService.getBookings();
  }

  rateUp(movie: Movie) {
    this.movieService.rateUp(movie);
  }

  rateDown(movie: Movie) {
    this.movieService.rateDown(movie);
  }

  book(eventData: any) {
    let { movie, theatre }: { movie: Movie, theatre: Theatre } = eventData;
    this.bookingService.addBooking(movie, theatre);
  }

}
