import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/ecommerce/models/product.model';
import { GameServiceService } from 'src/app/ecommerce/services/game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
games: Observable<Product[]>;

  constructor(private gameService: GameServiceService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteGame(id: number){
    if(confirm("Are you sure to delete it "+id)){
      this.gameService.deleteGame(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.router.navigate(['/admin']);
        }, error => console.log(error));
    }
  }
  reloadData() {
    this.games = this.gameService.getGameList();
  }
  gameDetails(id: number){
    this.router.navigate(['detailsGame', id]);
  }
  createGame(){
    this.router.navigate(['addGame']);
  }
  updateGame(id: number){
    this.router.navigate(['updateGame', id]);
  }
}
