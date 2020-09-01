import { Movie, Booking, Theatre } from './../../../shared/models/';
import { MOVIES } from './movie-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = MOVIES;
  myBookings: Booking[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  rateUp(movie: Movie) {
    if(movie.rating < 5) {
      movie.rating++;
    }
  }

  rateDown(movie: Movie) {
    if(movie.rating > 1) {
      movie.rating--;
    }
  }

  book(movie: Movie, theatre: Theatre) {
    let newBooking: Booking = this.myBookings.find(booking => booking.movieId === movie.id && booking.theatreId === theatre.id);

    if(newBooking) {
      newBooking.qty++;
    } else {
      newBooking = {
        movieId: movie.id,
        movie: movie.name,
        theatreId: theatre.id,
        theatre: theatre.name,
        price: theatre.ticket_price,
        qty: 1
      };
      this.myBookings.push(newBooking);
    }
  }

}
