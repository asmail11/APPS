import {Component, forwardRef, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from '../../model/Restaurant';
import {Address} from '../../model/Address';
import {AgmMap, GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: any;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.css']
})
export class RestaurantsDetailsComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  address: Address = new Address();
  idRestaurant: string;
  minusStr: number[];
  plusStr: number[];
  minusAndPlus: number[];

  geocoder: any;
  public location: Location = {
    lat: 48.8667,
    lng: 2.4333,
    marker: {
      lat: 48.8667,
      lng: 2.4333,
      draggable: true
    },
    zoom: 5
  };

  @ViewChild(AgmMap, {static: false}) map: AgmMap;
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute,
              @Inject(forwardRef(() => MapsAPILoader)) public mapsApiLoader: MapsAPILoader,
              @Inject(forwardRef(() => NgZone)) private zone: NgZone,
              @Inject(forwardRef(() => GoogleMapsAPIWrapper)) private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.location.marker.draggable = true;
    this.idRestaurant = this.route.snapshot.params.idRestaurant;
    this.restaurantService.findRestaurantById(this.idRestaurant).subscribe(res => {
      this.restaurants = res;
      this.restaurants.forEach(data => {
        this.restaurant = data;
        this.address = this.restaurant.address;
        this.minusAndPlus = this.restaurant.address.coord;
        this.minusStr = this.minusAndPlus.slice(0, 1);
        this.plusStr = this.minusAndPlus.slice(1, 2);
      });
    });
  }


}
