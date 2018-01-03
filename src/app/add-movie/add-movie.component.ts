import { Component, OnInit, Input } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  moviesInfo;
  addedMovie;

  constructor(private wimpService: WimpService) { }

  getMoviesFromService() {
    this.wimpService.getRecords('movies')
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

  ngOnInit() {
    this.getMoviesFromService();
  }

}
