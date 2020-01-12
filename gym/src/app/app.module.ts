import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FindAllGymnasesComponent } from './gymnases/find-all-gymnases/find-all-gymnases.component';
import { HttpClientModule } from '@angular/common/http';
import { GymnaseDetailsComponent } from './gymnases/gymnase-details/gymnase-details.component';
import { HomeComponent } from './home/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FindGymnaseByCityComponent } from './gymnases/find-gymnase-by-city/find-gymnase-by-city.component';
import { FindGymnaseByDayComponent } from './gymnases/find-gymnase-by-day/find-gymnase-by-day.component';
import { FindGymnaseByLibelleComponent } from './gymnases/find-gymnase-by-libelle/find-gymnase-by-libelle.component';
import { FindGymnaseByHourComponent } from './gymnases/find-gymnase-by-hour/find-gymnase-by-hour.component';
import { FindAllSportifsComponent } from './sportifs/find-all-sportifs/find-all-sportifs.component';
import { SportifsDetailsComponent } from './sportifs/sportifs-details/sportifs-details.component';
import { FindGymnaseBySurfaceComponent } from './gymnases/find-gymnase-by-surface/find-gymnase-by-surface.component';
import { FindGymnaseByNameComponent } from './gymnases/find-gymnase-by-name/find-gymnase-by-name.component';
import { FindAllArtistesComponent } from './artistes/find-all-artistes/find-all-artistes.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { QueryDemoComponent } from './movies/query-demo/query-demo.component';
import {FindAllMoviesComponent} from './movies/find-all-movies/find-all-movies.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {PagerService} from './services/PagerService';
import { FindAllRestaurantsComponent } from './restaurants/find-all-restaurants/find-all-restaurants.component';
import { RestaurantsDetailsComponent } from './restaurants/restaurants-details/restaurants-details.component';
import { FindRestaurantsBoroughComponent } from './restaurants/find-restaurants-borough/find-restaurants-borough.component';
import { HomeRestaurantsComponent } from './restaurants/home-restaurants/home-restaurants.component';
import { HomeGymnasesComponent } from './gymnases/home-gymnases/home-gymnases.component';
import { FindRestaurantsCuisineComponent } from './restaurants/find-restaurants-cuisine/find-restaurants-cuisine.component';
import { FindRestaurantsBurgerComponent } from './restaurants/find-restaurants-burger/find-restaurants-burger.component';
import { PageRestaurantsComponent } from './restaurants/page-restaurants/page-restaurants.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { MapComponent } from './map/map.component';
import { TypeCuisinesComponent } from './type-cuisines/type-cuisines.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAllGymnasesComponent,
    GymnaseDetailsComponent,
    HomeComponent,
    FindGymnaseByCityComponent,
    FindGymnaseByDayComponent,
    FindGymnaseByLibelleComponent,
    FindGymnaseByHourComponent,
    FindAllSportifsComponent,
    SportifsDetailsComponent,
    FindGymnaseBySurfaceComponent,
    FindGymnaseByNameComponent,
    FindAllArtistesComponent,
    FindAllMoviesComponent,
    MovieDetailsComponent,
    QueryDemoComponent,
    FindAllRestaurantsComponent,
    RestaurantsDetailsComponent,
    FindRestaurantsBoroughComponent,
    HomeRestaurantsComponent,
    HomeGymnasesComponent,
    FindRestaurantsCuisineComponent,
    FindRestaurantsBurgerComponent,
    PageRestaurantsComponent,
    MapComponent,
    TypeCuisinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule, MatSidenavModule, MatListModule,
    FormsModule,
    ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_g9wxlUEGAkRieHzU3aqWrNme1de-trA',
      libraries: ['places']
    }),
    FormsModule, // <---

  ],
  providers: [PagerService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

  ]
})
export class AppModule { }
