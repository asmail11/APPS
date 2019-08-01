import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { CreateMusicComponent } from './musics/create-music/create-music.component';
import { MusicListComponent } from './musics/music-list/music-list.component';
import { MusicDetailsComponent } from './musics/music-details/music-details.component';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GategoryTreeComponent } from './categories/gategory-tree/gategory-tree.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ConfirmationDialogComponent } from './confirmations/confirmation-dialog/confirmation-dialog.component';
import { OrdersMoviesComponent } from './ecommerce/movies/orders-movies/orders-movies.component';
import { MoviesComponent } from './ecommerce/movies/movies/movies.component';
import { ShoppingCartMoviesComponent } from './ecommerce/movies/shopping-cart-movies/shopping-cart-movies.component';
import { MoviesEcommerceComponent } from './ecommerce/movies-ecommerce/movies-ecommerce.component';
import { OrderMoviesComponent } from './ecommerce/movies-ecommerce/order-movies/order-movies.component';
import { MovieMoviesComponent } from './ecommerce/movies-ecommerce/movie-movies/movie-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    MovieListComponent,
    CreateMusicComponent,
    MusicListComponent,
    MusicDetailsComponent,
    CreateGameComponent,
    GameListComponent,
    GameDetailsComponent,
    GategoryTreeComponent,
    UpdateMovieComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    EcommerceComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    ConfirmationDialogComponent,
    OrdersMoviesComponent,
    MoviesComponent,
    ShoppingCartMoviesComponent,
    MoviesEcommerceComponent,
    OrderMoviesComponent,
    MovieMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
