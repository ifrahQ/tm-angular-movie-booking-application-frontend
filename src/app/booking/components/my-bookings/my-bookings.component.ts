import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../shared/models/index';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  @Input() bookings: Booking[];
  constructor() { }

  ngOnInit(): void {
  }

}
