import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../../../core/services/movie.service';
import { Movie } from '../../../shared/models/index';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.movie = this.movieService.getMovie(+id);
      console.log('movie', id, this.movie);
    });
  }
}
