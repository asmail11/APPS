import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportifService } from 'src/app/services/sportif.service';
import { Sportifs } from 'src/app/model/sportifs';

@Component({
  selector: 'app-sportifs-details',
  templateUrl: './sportifs-details.component.html',
  styleUrls: ['./sportifs-details.component.css']
})
export class SportifsDetailsComponent implements OnInit {

   idSportif: number;
   spotifs: Sportifs[];
   sportif: Sportifs = new Sportifs();

  constructor(private route: ActivatedRoute, private sportifService: SportifService) { }

  ngOnInit() {
    this.idSportif = this.route.snapshot.params.idSportif;
    this.sportifService.getSportifById(this.idSportif).subscribe(data => {
      this.spotifs = data;
      this.spotifs.forEach(s => {
        this.sportif = s;
      });
    });
  }

}
