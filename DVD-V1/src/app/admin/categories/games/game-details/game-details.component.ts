import { Component, OnInit, Input } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { GameServiceService } from 'src/app/ecommerce/services/game-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: UpdateProduct;
  id: number;

  constructor(private gameService: GameServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.game = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.gameService.getGameById(this.id)
    .subscribe(data => {
      console.log(data);
      this.game = data;
      console.log(this.game);
    }, error => console.log(error));
  }

  homePage(){
    this.router.navigate(['admin']);
  }

}
