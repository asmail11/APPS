import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { MovieServiceService } from 'src/app/ecommerce/services/movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movie: UpdateProduct = new UpdateProduct();
  submitted = false;

  constructor(private movieService: MovieServiceService, private router: Router) { }

  ngOnInit() {

  }
  newMovie(): void{
    this.submitted = false;
    this.movie = new UpdateProduct;
  }
  save(): void{
    this.movieService.createMovie(this.movie)
    .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new UpdateProduct;
    console.log(this.movie);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  homePage(){
    this.router.navigate(['admin']);
  }

}
