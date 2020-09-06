import { Router } from '@angular/router';
import { Movie } from './../../models/index';
import { MovieService } from './../../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm = new FormControl('');
  today = new Date();
  results: Movie[];

  constructor(
    private movieService: MovieService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.searchTerm
      .valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(term => this.movieService.search(term))
      )
      .subscribe(res => this.results = res);
  }

  loadMovieDetail(id) {
    this.searchTerm.setValue('');
    this.router.navigate(['movie', id])
  }

}
