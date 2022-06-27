export class Movie {

  Id: string;
  Title: string;
  Backdrop: string;
  Cast: string[];
  Classification: string;
  Director: string;
  Genres: string[];
  ImdbRating: number;
  Length: string;
  Overview: string;
  Poster: string;
  ReleasedOn: string;
  Slug: string;

  constructor(movie: any){
    this.Id = movie.id;
    this.Title = movie.title;
    this.Backdrop = movie.backdrop;
    this.Cast = movie.cast;
    this.Classification = movie.classification;
    this.Director = movie.director;
    this.Genres = movie.genres;
    this.ImdbRating = movie.imdb_rating;
    this.Length = movie.length;
    this.Overview = movie.overview;
    this.Poster = movie.poster;
    this.ReleasedOn = movie.released_on;
    this.Slug = movie.slug;
  }

}
