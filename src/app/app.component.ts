import { Component, OnInit } from '@angular/core';
import { WimpService } from './wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  moviesInfo;
  actorsInfo;
  addedMovie;
  addedActor;

  constructor(private wimpService: WimpService) { }

  getMoviesFromService() {
    this.wimpService.getRecords('movies')
      .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
      );
  }

  getMovieFromService(id: number) {
    this.wimpService.getRecord('movies', id)
      .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
      }
      );
  }

  addMovieUsingService(movie: NgForm) {
    this.wimpService.addRecord('movies', movie.value)
      .subscribe(
      moviesInfo => {
        this.addedMovie = moviesInfo;
        this.getMoviesFromService();
      }
      );
  }

  deleteMovieUsingService(id: number) {
    this.wimpService.deleteRecord('movies', id)
      .subscribe(
      moviesInfo => {
        this.moviesInfo = moviesInfo;
        this.getMoviesFromService();
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

  getActorFromService(id: number) {
    this.wimpService.getRecord('actors', id)
      .subscribe(
      actorsInfo => {
        this.actorsInfo = actorsInfo;
      }
      );
  }

  addActorUsingService(actor) {
    this.wimpService.addRecord('actors', actor.value)
      .subscribe(
      actorsInfo => {
        this.addedActor = actorsInfo;
        this.getActorsFromService();
      }
      );
  }

  ngOnInit() {
    this.getMoviesFromService();
    this.getActorsFromService();
  }
}
