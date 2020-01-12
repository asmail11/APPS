import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from 'src/app/ecommerce/services/music-service.service';
import { Router } from '@angular/router';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';

@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent implements OnInit {
  music: UpdateProduct = new UpdateProduct();
  submitted = false;

  constructor(private musicService: MusicServiceService, private router: Router) { }

  ngOnInit() {
  }
  newMusic(){
    this.submitted = false;
    this.music = new UpdateProduct;
  }
  save(){
    this.musicService.createMusic(this.music)
    .subscribe(data => console.log(data), error => console.log(error));
    this.music = new UpdateProduct;
    console.log(this.music);
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }

  homePage(){
    this.router.navigate(['admin']);
  }

}
