import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Restaurant} from '../../model/Restaurant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-restaurants-borough',
  templateUrl: './find-restaurants-borough.component.html',
  styleUrls: ['./find-restaurants-borough.component.scss']
})
export class FindRestaurantsBoroughComponent implements OnInit {

  submitted = false;
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  total: number;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(name: string) {
    this.restaurantService.findRestaurantByBorough(name).subscribe(res => {
      this.restaurants = res;
      this.submitted = true;
      this.total = this.restaurants.length;
    });

  }

  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
