import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListingComponent } from './movies/listing/movies-listing/movies-listing.component';
import { TitlePageComponent } from './movies/title-page/title-page.component';

const routes: Routes = [
  { path: 'listing', component: MoviesListingComponent },
  { path: 'title-page', component: TitlePageComponent },
  { path: '', redirectTo: 'listing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
