import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/entities/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entities/Category';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  id: number;
  movie: Movie = new Movie();
  submitted = false;
  categories: Observable<Category[]>;

  constructor(private movieService: MovieService, private categoryService: CategoryService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie = new Movie();
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id)
    .subscribe(data => {
      console.log(data);
      this.movie = data;
    }, error => console.log(error));

   this.submitted = false;
   this.movie = new Movie;
   this.categories = this.categoryService.getAllCategories();
  }
  save(){
    this.movieService.createMovie(this.movie)
          .subscribe(data => console.log(data), error => console.log(error));
          this.movie = new Movie;
          console.log(this.movie);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }
  homePage(){
    this.router.navigate(['/']);
  }

}
