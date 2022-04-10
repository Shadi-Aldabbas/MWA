import { Component, OnInit } from '@angular/core';
import { ActorsDataService } from '../actors-data.service';
import { Actor } from '../Models/actor-module';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[] = [];

  constructor(private actorsService: ActorsDataService) { }
  
  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void {
    this.actorsService.getActors().subscribe({
      next: actors => this.actors = actors,
      error: err => console.log(err),
      complete: () => console.log("got actors", this.actors)
    });
  }
}
