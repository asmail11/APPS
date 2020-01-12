import { Component, OnInit, Input } from '@angular/core';
import { MovieServiceService } from 'src/app/ecommerce/services/movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: UpdateProduct;
  id: number;

  constructor(private movieService: MovieServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movie = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id)
    .subscribe(data => {
      this.movie = data;
      console.log(data);
    }, error => console.log(error));
  }
  
  homePage(){
    this.router.navigate(['admin']);
  }

}
