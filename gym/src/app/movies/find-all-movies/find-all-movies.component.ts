import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-all-movies',
  templateUrl: './find-all-movies.component.html',
  styleUrls: ['./find-all-movies.component.css'],
})
export class FindAllMoviesComponent implements OnInit {
  spinnerLoad = true;
  showTable = false;
  collection = [];
  allNumber: number;

  constructor(private movieService: MovieService, private router: Router) {

  }

  ngOnInit() {
       this.movieService.findAllMovies().subscribe(data => {
         this.collection = data;
         this.spinnerLoad = false;
         this.showTable = true;
         this.allNumber = this.collection.length;
         console.log(this.allNumber);
       });
  }

  movieDetails(id: string) {
    this.router.navigate(['movieDetails/', id]);
  }

}
