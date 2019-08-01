import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/entities/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Category } from 'src/app/entities/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
movie: Movie = new Movie();
submitted = false;
categories: Observable<Category[]>;

  constructor(private movieService: MovieService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
  }

  newMovie(): void{
   this.submitted = false;
   this.movie = new Movie;
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


