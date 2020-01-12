import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { CreateMovieComponent } from './admin/categories/movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './admin/categories/movies/movie-details/movie-details.component';
import { MovieListComponent } from './admin/categories/movies/movie-list/movie-list.component';
import { UpdateMovieComponent } from './admin/categories/movies/update-movie/update-movie.component';
import { CreateProductComponent } from './admin/categories/products/create-product/create-product.component';
import { ProductDetailsComponent } from './admin/categories/products/product-details/product-details.component';
import { ProductListComponent } from './admin/categories/products/product-list/product-list.component';
import { UpdateProductComponent } from './admin/categories/products/update-product/update-product.component';
import { CreateGameComponent } from './admin/categories/games/create-game/create-game.component';
import { GameDetailsComponent } from './admin/categories/games/game-details/game-details.component';
import { GameListComponent } from './admin/categories/games/game-list/game-list.component';
import { UpdateGameComponent } from './admin/categories/games/update-game/update-game.component';
import { CreateMusicComponent } from './admin/categories/musics/create-music/create-music.component';
import { MusicDetailsComponent } from './admin/categories/musics/music-details/music-details.component';
import { MusicListComponent } from './admin/categories/musics/music-list/music-list.component';
import { UpdateMusicComponent } from './admin/categories/musics/update-music/update-music.component';
import { SearchsComponent } from './searchs/searchs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { CounterModule } from 'ngx-counter';
import { CommentComponent } from './layout/comment/comment.component';
import { ReplayCommentComponent } from './layout/replay-comment/replay-comment.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AddAddminComponent } from './add-addmin/add-addmin.component';
import { AllUsersComponent } from './all-users/all-users.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    GameComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    MovieListComponent,
    UpdateMovieComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateProductComponent,
    CreateGameComponent,
    GameDetailsComponent,
    GameListComponent,
    UpdateGameComponent,
    CreateMusicComponent,
    MusicDetailsComponent,
    MusicListComponent,
    UpdateMusicComponent,
    SearchsComponent,
    UpdateProfileComponent,
    SangleProductComponent,
    CommentComponent,
    ReplayCommentComponent,
    NotFoundComponent,
    AddAddminComponent,
    AllUsersComponent

  ],
  imports: [
    JwSocialButtonsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CounterModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
