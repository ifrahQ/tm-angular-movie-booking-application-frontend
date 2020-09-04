import { Movie, Theatre } from './../../shared/models/index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      name: 'Sadak 2',
      duration: 120,
      description: 'A nice movie made by Mahesh Bhatt but performed very badly',
      release_date: '28 Aug 2020',
      released: true,
      rating: 2,
      theatres: [1,4]
    },
    {
      id: 2,
      name: 'Dhoom 5',
      duration: 130,
      description: 'John Abrahim starrer movie. Very nice one.',
      release_date: '8 Sep 2020',
      released: false,
      rating: 3,
      theatres: [2,4]
    },
    {
      id: 3,
      name: 'student Of the year 2',
      duration: 100,
      description: 'Kangana acted well in this movie',
      release_date: '9 Nov 2020',
      released: true,
      rating: 4,
      theatres: [2,3]
    },
    {
      id: 4,
      name: 'Khuda hafiz',
      duration: 170,
      description: 'This Vidyut starrer is really good.',
      release_date: '18 Sep 2020',
      released: true,
      rating: 5,
      theatres: [1,2,3]
    }
  ];

  private theatres: Theatre[] = [
    { id: 1, name: 'PVR Priya', ticket_price: 100 },
    { id: 2, name: 'PVR Saket', ticket_price: 200 },
    { id: 3, name: 'PVR Plaza', ticket_price: 300 },
    { id: 4, name: 'PVR Anupam', ticket_price: 150 },
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id): Movie {
    console.log(this.movies, id, this.movies.find(m => m.id === id))
    return this.movies.find(m => m.id === id);
  }

  getTheatres(): Theatre[] {
    return this.theatres;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  rateUp(movie: Movie) {
    if (movie.rating < 5) {
      movie.rating++;
    }
  }

  rateDown(movie: Movie) {
    if (movie.rating > 1) {
      movie.rating--;
    }
  }
}
