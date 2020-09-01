import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';



@NgModule({
  declarations: [MyBookingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyBookingsComponent
  ]
})
export class BookingModule { }
