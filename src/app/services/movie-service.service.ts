import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IMovieService } from './interfaces/movie-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovieService {

  URL: string = 'https://wookie.codesubmit.io/movies';

  constructor(private _httpClient: HttpClient) {

  }

  getAllMovies(): any {
    var response = this._httpClient.get<any>(this.URL);
    return response;
  }



}
