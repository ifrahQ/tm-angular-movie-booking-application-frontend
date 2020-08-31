"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieListComponent = void 0;
var movie_data_1 = require("./movie-data");
var core_1 = require("@angular/core");
var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
        this.movies = movie_data_1.MOVIES;
        this.myBookings = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    MovieListComponent.prototype.rateUp = function (movie) {
        if (movie.rating < 5) {
            movie.rating++;
        }
    };
    MovieListComponent.prototype.rateDown = function (movie) {
        if (movie.rating > 1) {
            movie.rating--;
        }
    };
    MovieListComponent.prototype.book = function (movie, theatre) {
        var newBooking = this.myBookings.find(function (booking) { return booking.movieId === movie.id && booking.theatreId === theatre.id; });
        if (newBooking) {
            newBooking.qty++;
        }
        else {
            newBooking = {
                movieId: movie.id,
                movie: movie.name,
                theatreId: theatre.id,
                theatre: theatre.name,
                price: theatre.ticket_price,
                qty: 1
            };
            this.myBookings.push(newBooking);
        }
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['./movie-list.component.css']
        })
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
