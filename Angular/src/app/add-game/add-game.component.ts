import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  gameForm!:FormGroup; 

  constructor(private formBuilder:FormBuilder,private gamesService: GamesDataService) { 
    this.gameForm = this.formBuilder.group({
      // name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      year: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      price: ['', [Validators.required]],
      minPlayers: ['', [Validators.required]],
      maxPlayers: ['', [Validators.required]],
      publisher: [''],
      minAge: [],
      designers: [''],
      // reviews: [''],
    })
  }

  add(gameForm:FormGroup){
    console.log("form submitted",gameForm.value)
    this.gamesService.createGame(gameForm.value).subscribe({
      next: (x) => console.log("form submitted",x),
      error: err => console.log("err",err),
      complete: () => console.log("added the games")
    });
  }

  ngOnInit(): void {
  }

}
