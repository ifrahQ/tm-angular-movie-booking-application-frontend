import { MovieService } from './../../services/movie.service';
import { Movie, Theatre } from './../../../shared/models/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  movieAddForm = this.fb.group({
    name: [''],
    duration: [''],
    description: [''],
    released: [''],
    rating: [''],
    theatres: this.fb.array([this.fb.control([''])]),
  });
  theatreList: Theatre[];

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.theatreList = this.movieService.getTheatres();
  }

  onAddMovieFormSubmit() {
    this.formSubmit.emit(this.movieAddForm.value);
  }

  get theatres() {
    return this.movieAddForm.get('theatres') as FormArray;
  }

  addTheatre() {
    this.theatres.push(this.fb.control(''));
  }

}
