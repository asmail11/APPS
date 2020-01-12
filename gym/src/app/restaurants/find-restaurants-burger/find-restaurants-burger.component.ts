import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {Address} from '../../model/Address';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find-restaurants-burger',
  templateUrl: './find-restaurants-burger.component.html',
  styleUrls: ['./find-restaurants-burger.component.css']
})
export class FindRestaurantsBurgerComponent implements OnInit {
  restaurants: Restaurant[];
  spinnerLoad = true;
  showTable = false;
  total: number;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.restaurantService.findRestaurantByPizza().subscribe(restaurents => {
      this.restaurants = restaurents;
      this.total = this.restaurants.length;
      this.spinnerLoad = false;
      this.showTable = true;
    });
  }

  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }

}
