import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movies-listing',
  templateUrl: './movies-listing.component.html',
  styleUrls: ['./movies-listing.component.scss']
})
export class MoviesListingComponent implements OnInit {

  public moviesList: Movie[] = [];

  constructor(private _movieService: MovieService) { }

  public getMovieListing() {
    this._movieService.getAllMovies()
      .subscribe((res: any) => {

        var jsonObject = res.movies;

        Object.keys(jsonObject).forEach(m => {
          let movie = new Movie(jsonObject[m]);
          this.moviesList.push(movie);
        });

        // Test data parsing
        // TODO: Remove
        this.moviesList.forEach(m => {
          console.log(`Title: ${m.Title}, Rating: ${m.ImdbRating}`);
        });

      });
  }

  ngOnInit(): void {
    this.getMovieListing();
  }

}
