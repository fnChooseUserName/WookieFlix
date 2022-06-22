import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Shared Modules
import { MaterialModule } from './shared/material.module';
import { MoviesListingComponent } from './movies/listing/movies-listing/movies-listing.component'
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HeaderComponent } from './navigation/header/header.component';

// Pipes
import { GenrePipe } from './shared/genre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListingComponent,
    HeaderComponent,
    GenrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
