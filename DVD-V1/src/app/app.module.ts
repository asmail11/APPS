import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { MoviesComponent } from './ecommerce/categories/movies/movies.component';
import { MovieComponent } from './ecommerce/categories/movies/movie/movie.component';
import { MusicsComponent } from './ecommerce/categories/musics/musics.component';
import { MusicComponent } from './ecommerce/categories/musics/music/music.component';
import { GamesComponent } from './ecommerce/categories/games/games.component';
import { GameComponent } from './ecommerce/categories/games/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NavbarComponent,
    EcommerceComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    FooterComponent,
    MoviesComponent,
    MovieComponent,
    MusicsComponent,
    MusicComponent,
    GamesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
