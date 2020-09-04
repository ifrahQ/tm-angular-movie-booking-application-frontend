import { Movie, Theatre } from './../../../shared/models/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { MovieService } from '../../../core/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent implements OnInit {
  movieAddForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    duration: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
    released: [''],
    rating: [''],
    theatres: this.fb.array([
      this.fb.control('')
    ]),
  });
  theatreList: Theatre[];

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    this.theatreList = this.movieService.getTheatres();
  }

  onAddMovieFormSubmit() {
    this.movieAddForm.reset();
    for(let i=1; i<this.theatres.length; i++) {
      this.theatres.removeAt(i);
    }
  }

  get theatres() {
    return this.movieAddForm.get('theatres') as FormArray;
  }

  get name() {
    return this.movieAddForm.get('name');
  }

  get duration() {
    return this.movieAddForm.get('duration');
  }

  get description() {
    return this.movieAddForm.get('description');
  }

  addTheatre() {
    this.theatres.push(this.fb.control(''));
  }

  addMovie() {
    this.movieService.addMovie(this.movieAddForm.value);
    this.router.navigate(['/home']);
  }

}
