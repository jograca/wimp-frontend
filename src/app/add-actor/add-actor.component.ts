import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  actorsInfo;
  addedActor;

  constructor(private wimpService: WimpService) { }

  getActorsFromService() {
    this.wimpService.getRecords('actors')
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

  deleteActorUsingService(id: number) {
    this.wimpService.deleteRecord('actors', id)
      .subscribe(
        actorsInfo => {
        this.actorsInfo = actorsInfo;
        this.getActorsFromService();
      }
      );
  }

  ngOnInit() {
    this.getActorsFromService();
  }

}
