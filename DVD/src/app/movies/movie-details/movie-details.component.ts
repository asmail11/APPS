import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/entities/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.movie = new Movie();
  this.id = this.route.snapshot.params['id'];
  this.movieService.getMovieById(this.id)
  .subscribe(data => {
    console.log(data);
    this.movie = data;
  }, error => console.log(error));
  }
  updateActive(isActive: boolean){
    this.movieService.updateMovie(
      this.movie.id,
      {
        name: this.movie.name,
        description: this.movie.description,
        price: this.movie.price,
        createAt: this.movie.createAt,
        active: isActive
      }).subscribe(
          data => {
            console.log('Error:', data);
            this.movie = data as Movie
            
          }, error => console.log(error));
  }
  list(){
    this.router.navigate(['movies']);
  }
  homePage(){
    this.router.navigate(['/']);
  }
}
