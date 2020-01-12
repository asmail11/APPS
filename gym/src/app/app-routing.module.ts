import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymnaseDetailsComponent } from './gymnases/gymnase-details/gymnase-details.component';
import { FindAllGymnasesComponent } from './gymnases/find-all-gymnases/find-all-gymnases.component';
import { HomeComponent } from './home/home/home.component';
import { SportifsDetailsComponent } from './sportifs/sportifs-details/sportifs-details.component';
import { FindGymnaseByCityComponent } from './gymnases/find-gymnase-by-city/find-gymnase-by-city.component';
import { FindGymnaseByDayComponent } from './gymnases/find-gymnase-by-day/find-gymnase-by-day.component';
import { FindGymnaseBySurfaceComponent } from './gymnases/find-gymnase-by-surface/find-gymnase-by-surface.component';
import { FindGymnaseByHourComponent } from './gymnases/find-gymnase-by-hour/find-gymnase-by-hour.component';
import { FindGymnaseByLibelleComponent } from './gymnases/find-gymnase-by-libelle/find-gymnase-by-libelle.component';
import { FindGymnaseByNameComponent } from './gymnases/find-gymnase-by-name/find-gymnase-by-name.component';
import { FindAllSportifsComponent } from './sportifs/find-all-sportifs/find-all-sportifs.component';
import {FindAllArtistesComponent} from './artistes/find-all-artistes/find-all-artistes.component';
import {FindAllMoviesComponent} from './movies/find-all-movies/find-all-movies.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {QueryDemoComponent} from './movies/query-demo/query-demo.component';
import {FindAllRestaurantsComponent} from './restaurants/find-all-restaurants/find-all-restaurants.component';
import {RestaurantsDetailsComponent} from './restaurants/restaurants-details/restaurants-details.component';
import {FindRestaurantsBoroughComponent} from './restaurants/find-restaurants-borough/find-restaurants-borough.component';
import {HomeRestaurantsComponent} from './restaurants/home-restaurants/home-restaurants.component';
import {HomeGymnasesComponent} from './gymnases/home-gymnases/home-gymnases.component';
import {FindRestaurantsCuisineComponent} from './restaurants/find-restaurants-cuisine/find-restaurants-cuisine.component';
import {FindRestaurantsBurgerComponent} from './restaurants/find-restaurants-burger/find-restaurants-burger.component';
import {PageRestaurantsComponent} from './restaurants/page-restaurants/page-restaurants.component';
import {TypeCuisinesComponent} from './type-cuisines/type-cuisines.component';

const routes: Routes = [
  {
   path: 'home',
   component: HomeComponent,
   children: [
    {
      path: '',
      component: HomeGymnasesComponent,
      children: [
        {
          path: '',
          component: FindAllGymnasesComponent
        },
        {
          path: 'findByName',
          component: FindGymnaseByNameComponent
        },
        {
          path: 'findByCity',
          component: FindGymnaseByCityComponent
        },
        {
          path: 'findByDay',
          component: FindGymnaseByDayComponent
        },
        {
          path: 'findBySurface',
          component: FindGymnaseBySurfaceComponent
        },
        {
          path: 'findByHour',
          component: FindGymnaseByHourComponent
        },
        {
          path: 'findByLibelle',
          component: FindGymnaseByLibelleComponent
        },

        {
          path: 'gymnase-details/:idGymnase',
          component: GymnaseDetailsComponent
        },
      ]
    },
  ]
},
  {
   path: 'sportif-details/:idSportif',
   component: SportifsDetailsComponent
  },
  {
    path: 'allSportifs',
    component: FindAllSportifsComponent
  },
  {
    path: 'findAllArtistes',
    component: FindAllArtistesComponent
  },
  {
    path: 'findAllMovies',
    component: FindAllMoviesComponent
  },
  {
    path: 'query-demo',
    component: QueryDemoComponent
  },
  {
    path: 'movieDetails/:idMovie',
    component: MovieDetailsComponent
  },
  {
    path: 'home-restaurant',
    component: HomeRestaurantsComponent,
    children: [
      {
        path: '',
        component: PageRestaurantsComponent
      },
      {
        path: 'findRestaurantBorough',
        component: FindRestaurantsBoroughComponent
      },
      {
        path: 'restaurant-details/:idRestaurant',
        component: RestaurantsDetailsComponent,
      },
      {
        path: 'type-cuisine/:typeCuisine',
        component: TypeCuisinesComponent
      },
      {
        path: 'findRestaurantCuisine',
        component: FindRestaurantsCuisineComponent
      },
      {
        path: 'findByBurgerKing',
        component: FindRestaurantsBurgerComponent
      },
      {
        path: 'find-all-restaurant',
        component: FindAllRestaurantsComponent,
      }
    ]
  },


  {path: '', redirectTo: '/home-restaurant', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
