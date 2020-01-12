import { Component, OnInit } from '@angular/core';
import {Artistes} from '../../model/Artistes';
import {ArtisteService} from '../../services/artiste.service';

@Component({
  selector: 'app-find-all-artistes',
  templateUrl: './find-all-artistes.component.html',
  styleUrls: ['./find-all-artistes.component.css']
})
export class FindAllArtistesComponent implements OnInit {
  artistes: Artistes[];
  spinnerLoad = true;
  showTable = false;
  allNumber: number;

  constructor(private artisteService: ArtisteService) { }

  ngOnInit() {
    this.artisteService.findAllArtistes().subscribe(data => {
      this.artistes = data;
      this.spinnerLoad = false;
      this.showTable = true;
      this.allNumber = this.artistes.length;
    });
  }

}
