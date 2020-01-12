import { Component, OnInit } from '@angular/core';
import { Sportifs } from 'src/app/model/sportifs';
import { SportifService } from 'src/app/services/sportif.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-all-sportifs',
  templateUrl: './find-all-sportifs.component.html',
  styleUrls: ['./find-all-sportifs.component.css']
})
export class FindAllSportifsComponent implements OnInit {
   sportifs: Sportifs[];
   total: number;

  constructor(private sportifService: SportifService, private router: Router) { }

  ngOnInit() {
    this.sportifService.findAllSportifs().subscribe(data => {
      this.sportifs = data;
      this.total = this.sportifs.length;
    });
  }
  sportifDetails(id: number) {
    this.router.navigate(['sportif-details', id]);
  }
}
