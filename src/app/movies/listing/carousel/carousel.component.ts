import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(private router: Router) { }

  @Input() movies: Movie[];

  carouselOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 600,
      navText: [ '&#8249 prev', 'next &#8250' ],
      autoWidth: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        760: {
          items: 3
        },
        1000: {
          items: 4
        }
      },
      nav: true
  }

  public openTitlePage($movieId: any) {
    this.router.navigate(['title-page'], {state: { Id: $movieId }});
  }

}
