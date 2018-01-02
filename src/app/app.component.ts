import { Component, OnInit } from '@angular/core';
import { WimpService } from './wimp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  moviesInfo;
  actorsInfo;

  constructor(private wimpService: WimpService) {}

  getMoviesFromService() {
    this.wimpService.getRecords('movies')
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  getMovieFromService() {
    this.wimpService.getRecord('movies', 1)
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  addMovieUsingService(movie) {
    console.log('Clicked!');
    console.log(movie.value);
    this.wimpService.addRecord('movies', movie)
    .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
    );
  }

  getActorsFromService() {
    this.wimpService.getRecords('actors')
    .subscribe(
      actorsInfo => {
        this.actorsInfo = actorsInfo;
      }
    );
  }

  getActorFromService() {
    this.wimpService.getRecord('actors', 1)
    .subscribe(
      actorsInfo => {
        this.actorsInfo = actorsInfo;
      }
    );
  }

  addActorUsingService(actor) {
    console.log('Clicked!');
    console.log(actor.value);
    this.wimpService.addRecord('actors', actor)
    .subscribe(
      actorsInfo => {
        this.actorsInfo = actorsInfo;
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromService();
    this.getActorsFromService();
  }
}
