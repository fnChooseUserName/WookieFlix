import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'genreFilter',
  pure: false
})
export class GenrePipe implements PipeTransform {

  transform(movies: any, genreFilter: Object): any {
    if(!movies || !genreFilter) {
      return movies;
    }
    return movies.filter((movie: any) => movie.Genres.includes(genreFilter));
  }

}
