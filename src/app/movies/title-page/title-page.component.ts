import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  movie: Movie;

  Id: string;

  constructor(private _movieService: MovieService, private router: Router) {
    this.Id = this.router.getCurrentNavigation()!.extras!.state!['Id'];
  }

  ngOnInit(): void {
    this.movie = this._movieService.getMovieById(this.Id)!;
  }

  public getMovieRating() {
    return this.movie.ImdbRating / 2;
  }

  public exitTitlePage() {
    this.router.navigate(['/listing']);
  }

}
