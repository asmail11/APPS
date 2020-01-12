import { Component, OnInit } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { MovieServiceService } from 'src/app/ecommerce/services/movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  id: number;
  movie: UpdateProduct = new UpdateProduct();
  submitted = false;

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id)
    .subscribe(data => {
      console.log(data);
      this.movie = data;
    }, error => console.log(error));

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
