import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { IMovieService } from './interfaces/movie-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovieService {

  URL: string = 'https://wookie.codesubmit.io/movies';

  constructor(private _httpClient: HttpClient) {

  }

  getAllMovies(): Observable<HttpResponse<Movie[]>> {
    var response = this._httpClient.get<any>(this.URL, { observe: 'response' });

    return response;
  }



}
