import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/entities/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.relaodData();
  }
  relaodData() {
    this.games = this.gameService.getGameList();
  }

}
