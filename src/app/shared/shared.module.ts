import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RatingPipe } from './pipes/rating.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    RatingPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavBarComponent,
    RatingPipe
  ]
})
export class SharedModule { }
