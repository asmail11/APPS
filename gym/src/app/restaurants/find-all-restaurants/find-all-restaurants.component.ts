import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {RestaurantService} from '../../services/restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-all-restaurants',
  templateUrl: './find-all-restaurants.component.html',
  styleUrls: ['./find-all-restaurants.component.scss']
})
export class FindAllRestaurantsComponent implements OnInit {
   restaurants: Restaurant[];
   spinnerLoad = true;
   total: number;
   grade: any;
   coord = 40.7180815;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.restaurantService.findAllRestaurants().subscribe(restaurents => {
      this.restaurants = restaurents;
      console.log(restaurents);
      this.total = this.restaurants.length;
      this.spinnerLoad = false;
    });
  }

  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
