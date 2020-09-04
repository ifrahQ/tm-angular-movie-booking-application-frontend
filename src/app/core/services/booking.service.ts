import { Booking, Movie, Theatre } from './../../shared/models/index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings = [];
  constructor() { }

  getBookings(): Booking[] {
    return this.bookings;
  }

  addBooking(movie: Movie, theatre: Theatre) {
    let newBooking: Booking = this.bookings.find(booking => booking.movieId === movie.id && booking.theatreId === theatre.id);

    if (newBooking) {
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
      this.bookings.push(newBooking);
    }
  }
}
