import { Component, OnInit, Input } from '@angular/core';
import { UpdateProduct } from 'src/app/ecommerce/models/updateProduct';
import { MusicServiceService } from 'src/app/ecommerce/services/music-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
@Input() music: UpdateProduct;
id: number;

  constructor(private musicService: MusicServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.music = new UpdateProduct();
    this.id = this.route.snapshot.params['id'];
    this.musicService.getMusicById(this.id)
    .subscribe(data => {
      console.log(data);
      this.music = data;
    }, error => console.log(error));
  }
  homePage(){
    this.router.navigate(['admin']);
  }

}
