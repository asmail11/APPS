import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './ecommerce/categories/movies/movies.component';
import { MusicsComponent } from './ecommerce/categories/musics/musics.component';
import { GamesComponent } from './ecommerce/categories/games/games.component';
import { CreateMovieComponent } from './admin/categories/movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './admin/categories/movies/movie-details/movie-details.component';
import { UpdateMovieComponent } from './admin/categories/movies/update-movie/update-movie.component';
import { ProductDetailsComponent } from './admin/categories/products/product-details/product-details.component';
import { UpdateProductComponent } from './admin/categories/products/update-product/update-product.component';
import { CreateProductComponent } from './admin/categories/products/create-product/create-product.component';
import { CreateGameComponent } from './admin/categories/games/create-game/create-game.component';
import { GameDetailsComponent } from './admin/categories/games/game-details/game-details.component';
import { UpdateGameComponent } from './admin/categories/games/update-game/update-game.component';
import { CreateMusicComponent } from './admin/categories/musics/create-music/create-music.component';
import { MusicDetailsComponent } from './admin/categories/musics/music-details/music-details.component';
import { UpdateMusicComponent } from './admin/categories/musics/update-music/update-music.component';
import { SearchsComponent } from './searchs/searchs.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { CommentComponent } from './layout/comment/comment.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AddAddminComponent } from './add-addmin/add-addmin.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'musics',
    component: MusicsComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'search',
    component: SearchsComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: 'update/profile/:id',
    component: UpdateProfileComponent
  },
  {
    path: 'add/admin',
    component: AddAddminComponent
  },
  {
     path: 'sangle/product/:id',
     component: SangleProductComponent
  },
  {path: 'addMovie', component: CreateMovieComponent},
  {path: 'detailsMovie/:id', component: MovieDetailsComponent},
  {path: 'updateMovie/:id', component: UpdateMovieComponent},

  {path: 'addProduct', component: CreateProductComponent},
  {path: 'detailsProduct/:id', component: ProductDetailsComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},

  {path: 'addGame', component: CreateGameComponent},
  {path: 'detailsGame/:id', component: GameDetailsComponent},
  {path: 'updateGame/:id', component: UpdateGameComponent},

  {path: 'addMusic', component: CreateMusicComponent},
  {path: 'detailsMusic/:id', component: MusicDetailsComponent},
  {path: 'updateMusic/:id', component: UpdateMusicComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
