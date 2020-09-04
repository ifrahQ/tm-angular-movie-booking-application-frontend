import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../shared/models/index';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }

}
