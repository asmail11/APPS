import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { GameServiceService } from 'src/app/ecommerce/services/game-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {
  game: UpdateProduct = new UpdateProduct();
  submitted = false;
  id: number;

  constructor(private gameService: GameServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.game = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.gameService.getGameById(this.id)
    .subscribe(data => {
      console.log(data);
      this.game = data;
    }, error => console.log(error));

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
