import { Observable } from "rxjs";
import { HttpResponse } from '@angular/common/http';


export interface IMovieService {

  getAllMovies: () => Observable<HttpResponse<any>>;

}
