// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { StarRatingModule } from 'angular-star-rating';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MoviesListingComponent } from './movies/listing/movies-listing/movies-listing.component'

// Pipes
import { GenrePipe } from './shared/genre.pipe';

// Services
import { HttpInterceptorService } from './services/http-interceptor.service';
import { CarouselComponent } from './movies/listing/carousel/carousel.component';
import { TitlePageComponent } from './movies/title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListingComponent,
    HeaderComponent,
    GenrePipe,
    CarouselComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CarouselModule,
    StarRatingModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
