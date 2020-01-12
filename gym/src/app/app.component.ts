import { Component, ViewChild } from '@angular/core';
import { FindAllGymnasesComponent } from './gymnases/find-all-gymnases/find-all-gymnases.component';
import {Restaurant} from './model/Restaurant';
import {RestaurantService} from './services/restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('findAllGymnases', {static: false})
  findAllGymnases: FindAllGymnasesComponent;

  restaurantsByName: Restaurant[];
  submitted = false;
  total: number;

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  onSubmit(name: string) {
    this.restaurantService.findRestaurantByName(name).subscribe(res => {
      this.restaurantsByName = res.slice(0, 3);
      this.submitted = true;
      this.total = this.restaurantsByName.length;
      console.log(res);
    });
  }
  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
