import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isTitlePage: boolean;

  searchTerm: string;

  constructor(private router: Router, private _movieService: MovieService) {
    router.events.pipe(
      filter(($e: Event): $e is NavigationEnd => $e instanceof NavigationEnd)
    ).subscribe(($e: RouterEvent) => {
      this.isTitlePage = $e.url === '/title-page';
    })
  }

  ngOnInit(): void {
  }

  public searchMovies() {
    if(this.searchTerm) {
      this._movieService.getAllMovies(this.searchTerm);
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/listing']);
    }
  }

  public reloadListing() {
    this.searchTerm = '';
    this._movieService.getAllMovies(this.searchTerm);
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/listing']);
  }

}
