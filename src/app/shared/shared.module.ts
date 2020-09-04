import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RatingPipe } from './pipes/rating.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    RatingPipe,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavBarComponent,
    RatingPipe,
    HighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
