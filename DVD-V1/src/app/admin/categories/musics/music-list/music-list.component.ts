import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/ecommerce/models/product.model';
import { MusicServiceService } from 'src/app/ecommerce/services/music-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musics: Observable<Product[]>;

  constructor(private musicService: MusicServiceService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteMusic(id: number){
    if(confirm("Are you sure to delete it "+id)){
      this.musicService.deleteMusic(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
          this.router.navigate(['/admin']);
        }, error => console.log(error));
    }
  }
  reloadData() {
    this.musics = this.musicService.getMusicList();
  }
  musicDetails(id: number){
    this.router.navigate(['detailsMusic', id]);
  }
  createMusic(){
    this.router.navigate(['addMusic']);
  }
  updateMusic(id: number){
    this.router.navigate(['updateMusic', id]);
  }
}
