import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { GameServiceService } from 'src/app/ecommerce/services/game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  game: UpdateProduct = new UpdateProduct();
  submitted = false;

  constructor(private gameService: GameServiceService, private router: Router) { }

  ngOnInit() {
  }
  newGame(){
    this.submitted = false;
    this.game = new UpdateProduct;
  }
  save(){
    this.gameService.createGame(this.game)
    .subscribe(data => console.log(data), error => console.log(error));
    this.game = new UpdateProduct;
    console.log(this.game);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  homePage(){
    this.router.navigate(['admin']);
  }


}
