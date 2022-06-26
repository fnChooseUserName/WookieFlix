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

  public async getMovieListing() {

    await this._movieService.getAllMovies()
      .subscribe((res: any) => {

        var jsonObject = res.body.movies;

        Object.keys(jsonObject).forEach(m => {
          let movie = new Movie(jsonObject[m]);
          this.moviesList.push(movie);
          this.listUniqueGenres(movie);
        });

        // Test data parsing
        // TODO: Remove
        this.moviesList.forEach(m => {
          console.log(`Title: ${m.Title}, Rating: ${m.ImdbRating}`);
        });

        // Sort list alphabetically
        this.genreList.sort((a, b) => a.localeCompare(b));

        // Test data parsing
        // TODO: Remove
        this.genreList.forEach(g => {
          console.log(g);
        });

      });
  }

  private listUniqueGenres (movie: Movie) {
    let genres = movie.Genres;
    genres.forEach(genre => {
      if(!this.genreList.includes(genre)) {
        this.genreList.push(genre);
      }
    });
  }

  ngOnInit(): void {
    this.getMovieListing();
  }

}
