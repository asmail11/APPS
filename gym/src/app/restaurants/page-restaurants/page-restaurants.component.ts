import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../model/Restaurant';
import {RestaurantService} from '../../services/restaurant.service';
import {Router} from '@angular/router';
import {Address} from '../../model/Address';

@Component({
  selector: 'app-page-restaurants',
  templateUrl: './page-restaurants.component.html',
  styleUrls: ['./page-restaurants.component.scss']
})
export class PageRestaurantsComponent implements OnInit {
  restaurantsReserve: Restaurant[];
  cuisines: Restaurant[];
  restaurantsBurgerKings: Restaurant[];
  filteredData: Restaurant[];
  restaurantsNewYork: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  address: Address = new Address();
  showAllCuisine = true;
  hideCuisine = false;
  spinnerLoad = true;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.findNewYork();
    this.findBurgerKing();
    this.findAllRestaurants();
    this. findRestaurantsReserve();
  }
 findRestaurantsReserve() {
   this.restaurantService.findAllRestaurants().subscribe(restaurents => {
     this.restaurantsReserve = restaurents.slice(0, 4);
     this.spinnerLoad = false;
   });
 }

  findAllRestaurants() {
    this.restaurantService.findAllRestaurants().subscribe(restaurants => {
      this.cuisines = restaurants.slice(0, 14);
      this.filteredData = Array.from(this.cuisines.reduce((m, t) => m.set(t.cuisine, t), new Map()).values());
      this.spinnerLoad = false;
    });
  }
  getAllCuisine() {
    this.restaurantService.findAllRestaurants().subscribe(restaurants => {
      this.cuisines = restaurants.slice(0, 40);
      this.filteredData = Array.from(this.cuisines.reduce((m, t) => m.set(t.cuisine, t), new Map()).values());
      this.showAllCuisine = false;
      this.hideCuisine = true;
    });
  }
  getAllCuisine2() {
    this.restaurantService.findAllRestaurants().subscribe(restaurants => {
      this.cuisines = restaurants.slice(0, 60);
      this.filteredData = Array.from(this.cuisines.reduce((m, t) => m.set(t.cuisine, t), new Map()).values());
    });

  }

  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
  restaurantTypeCuisine(cuisine: string) {
    this.router.navigate(['/home-restaurant/type-cuisine', cuisine]);
  }

  findBurgerKing() {
    this.restaurantService.findRestaurantByBurgerKing().subscribe(restaurents => {
      this.restaurantsBurgerKings = restaurents;
    });
  }
  findNewYork() {
    this.restaurantService.findRestaurantByNewYork().subscribe(newYork => {
      this.restaurantsNewYork = newYork.slice(0, 4);
    });
  }
 readMoreNewYork() {
     this.restaurantService.findRestaurantByNewYork().subscribe(newYork => {
       this.restaurantsNewYork = newYork;
     });
   }


}
