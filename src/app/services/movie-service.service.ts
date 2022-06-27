import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesList: Movie[] = [];

  public genreList: string[] = [];

  constructor(private _httpClient: HttpClient) {
    this.getAllMovies();
  }

  get movies(): Observable<Movie[]> {
    return of(this.moviesList);
  }

  get genres(): Observable<string[]> {
    return of(this.genreList);
  }

  public getMovieById(Id: string) {
    return this.moviesList.find(m => m.Id === Id);
  }

  public async getAllMovies(query?: string) {

    this.moviesList = [];
    this.genreList = [];

    let URL = environment.BASE_URL;

    if(query) {
      URL += `?q=${encodeURIComponent(query)}`
    }


    await this._httpClient.get<any>(URL)
      .subscribe(res => {

        var jsonObject = res.movies;
        console.log(jsonObject);

        Object.keys(jsonObject).forEach(m => {
          let movie = new Movie(jsonObject[m]);
          this.moviesList.push(movie);
          this.listUniqueGenres(movie);
        });
      })

  }

  private listUniqueGenres (movie: Movie) {
    let genres = movie.Genres;
    genres.forEach(genre => {
      if(!this.genreList.includes(genre)) {
        this.genreList.push(genre);
      }
    });
  }



}
