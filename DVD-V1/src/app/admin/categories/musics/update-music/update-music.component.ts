import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicServiceService } from 'src/app/ecommerce/services/music-service.service';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';

@Component({
  selector: 'app-update-music',
  templateUrl: './update-music.component.html',
  styleUrls: ['./update-music.component.css']
})
export class UpdateMusicComponent implements OnInit {
  music: UpdateProduct = new UpdateProduct();
  submitted = false;
  id: number;

constructor(private musicService: MusicServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.music = new UpdateProduct();
      this.id = this.route.snapshot.params['id'];
      this.musicService.getMusicById(this.id)
      .subscribe(data => {
        console.log(data);
        this.music = data;
      }, error => console.log(error));

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
