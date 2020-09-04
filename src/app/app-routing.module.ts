import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movie/components/movie-list/movie-list.component";
import { AboutPageComponent } from './about/components/about-page/about-page.component';
import { ContactPageComponent } from './contact/components/contact-page/contact-page.component';
import { MyBookingsComponent } from './booking/components/my-bookings/my-bookings.component';
import { AddMovieFormComponent } from './movie/components/add-movie-form/add-movie-form.component';
import { MovieDetailComponent } from './movie/components/movie-detail/movie-detail.component';


const routes: Routes = [
  { path: "home", component: MovieListComponent },
  { path: "my-bookings", component: MyBookingsComponent },
  { path: "add-movie", component: AddMovieFormComponent },
  { path: "movie/:id", component: MovieDetailComponent },
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
