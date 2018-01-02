import { Component, OnInit } from '@angular/core';
import { WimpService } from './wimp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  moviesInfo;
  movieInfo;

  constructor(private wimpService: WimpService) {}

  getMoviesFromService() {
    this.wimpService.getRecords('api/movies')
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  getMovieFromService() {
    this.wimpService.getRecord('api/movies', 1)
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  addMovieUsingService(movie) {
    this.wimpService.addRecord('api/movies', movie)
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromService();
  }
}
