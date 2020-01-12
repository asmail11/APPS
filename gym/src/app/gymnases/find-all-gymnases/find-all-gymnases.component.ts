import { Component, OnInit } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Seances } from 'src/app/model/seances';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-all-gymnases',
  templateUrl: './find-all-gymnases.component.html',
  styleUrls: ['./find-all-gymnases.component.css'],
})
export class FindAllGymnasesComponent implements OnInit {
  gymnases: Gymnases[] = [];
  seances: Seances[] = [];
  allNumber: number;

  constructor(private gymnasesService: GymnasesService, private router: Router) { }

  ngOnInit() {
    this.gymnasesService.getAllGymnases().subscribe((data: Gymnases[])  => {
      this.gymnases = data;
      this.allNumber = this.gymnases.length;
      this.gymnases.forEach((g: any) => {
        g.seances.forEach((s: Seances) => {
          this.seances.push(s);
        });

      });
    });
  }
  gymanseDetails(idGymnase: number) {
    this.router.navigate(['/home/gymnase-details/', idGymnase]);
  }
}
