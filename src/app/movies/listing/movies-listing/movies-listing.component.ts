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

  public genreList: string[] = [];

  constructor(private _movieService: MovieService) { }

  public getMovieListing() {

    this._movieService.movies.subscribe(movies => {
      this.moviesList = movies;
    });

    this._movieService.genres.subscribe(genres => {
      this.genreList = genres;
    })

  }

  ngOnInit(): void {
    this.getMovieListing();
  }

}
