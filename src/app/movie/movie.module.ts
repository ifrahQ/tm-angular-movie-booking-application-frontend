import { BookingModule } from './../booking/booking.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [MovieListComponent, MovieItemComponent],
  imports: [CommonModule, BookingModule],
  exports: [MovieListComponent]
})
export class MovieModule { }
