import { BookingModule } from './../booking/booking.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { AddMovieFormComponent } from './components/add-movie-form/add-movie-form.component';

@NgModule({
  declarations: [MovieListComponent, MovieItemComponent, AddMovieFormComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    BookingModule,
    ReactiveFormsModule
  ],
  exports: [MovieListComponent]
})
export class MovieModule { }
