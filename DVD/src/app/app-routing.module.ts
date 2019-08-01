import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { MusicListComponent } from './musics/music-list/music-list.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { MoviesEcommerceComponent } from './ecommerce/movies-ecommerce/movies-ecommerce.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MovieListComponent},
  {path: 'addMovie', component: CreateMovieComponent},
  {path: 'detailsMovie/:id', component: MovieDetailsComponent},
  {path: 'updateMovie/:id', component: UpdateMovieComponent},
  {path: 'ecommerce', component: EcommerceComponent},
  {path: 'addProducts', component: AddProductComponent},
  {path: 'detailsProduct/:id', component: ProductDetailsComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'addCategory', component: AddCategoryComponent},
  {path: 'musics', component: MusicListComponent},
  {path: 'games', component: GameListComponent},
  {path: 'moviesEcommerce', component: MoviesEcommerceComponent}// Movie Ecommerce


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
