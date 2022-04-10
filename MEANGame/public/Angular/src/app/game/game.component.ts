import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game!: Game;
  constructor(private route: ActivatedRoute, private gameService: GamesDataService, private _router: Router) {
    this.game = new Game("", "", 0);
  }
  ngOnInit(): void {
    const gameId = this.route.snapshot.params["gameId"];
    console.log(gameId);

    this.gameService.getGame(gameId).subscribe(game => { this.game = game; });
  }
  delete(_id: string): void {
    this.gameService.deleteGame(_id).subscribe({
      next: res => console.log("res", res),
      error: err => console.log(err),
      complete: () => {
        this._router.navigate(['games']);
      }
    })
  }

}
