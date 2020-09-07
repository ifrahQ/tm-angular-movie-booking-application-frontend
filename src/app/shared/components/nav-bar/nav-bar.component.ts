import { UserService } from './../../../core/services/user.service';
import { Router } from '@angular/router';
import { Movie, User } from './../../models/index';
import { MovieService } from './../../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm = new FormControl('');
  today = new Date();
  results: Movie[];
  user$: Observable<User>;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private userService: UserService  
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser$();
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

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

}
