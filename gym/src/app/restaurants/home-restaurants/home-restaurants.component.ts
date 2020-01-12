import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {RestaurantService} from '../../services/restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './home-restaurants.component.html',
  styleUrls: ['./home-restaurants.component.scss']
})
export class HomeRestaurantsComponent implements OnInit, AfterViewInit {
  submitted = false;
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  total: number;

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
  onSubmit(name: string) {
    this.restaurantService.findRestaurantByName(name).subscribe(res => {
      this.restaurants = res.slice(0, 3);
      this.submitted = true;
      this.total = this.restaurants.length;
    });
  }
  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
