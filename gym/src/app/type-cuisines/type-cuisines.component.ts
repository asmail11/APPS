import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../model/Restaurant';
import {RestaurantService} from '../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-type-cuisines',
  templateUrl: './type-cuisines.component.html',
  styleUrls: ['./type-cuisines.component.css']
})
export class TypeCuisinesComponent implements OnInit {
 typeCuisine: string;
 restaurants: Restaurant[];
  spinnerLoad = true;
  total: number;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.typeCuisine = this.route.snapshot.params.typeCuisine;
    this.restaurantService.findRestaurantByCuisine(this.typeCuisine).subscribe(res => {
      this.restaurants = res;
      this.total = this.restaurants.length;
      this.spinnerLoad = false;
    });
  }
  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
