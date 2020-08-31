import { MOVIES } from './movie-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = MOVIES;
  myBookings = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  rateUp(movie) {
    if(movie.rating < 5) {
      movie.rating++;
    }
  }

  rateDown(movie) {
    if(movie.rating > 1) {
      movie.rating--;
    }
  }

  book(movie, theatre) {
    let newBooking = this.myBookings.find(booking => booking.movieId === movie.id && booking.theatreId === theatre.id);

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
