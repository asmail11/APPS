import { Component, OnInit } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-gymnase-by-libelle',
  templateUrl: './find-gymnase-by-libelle.component.html',
  styleUrls: ['./find-gymnase-by-libelle.component.css']
})
export class FindGymnaseByLibelleComponent implements OnInit {
  gymnases: Gymnases[] = [];
  seance: Gymnases = new Gymnases();
  submitted = false;
  libellle: string;
  total: number;

  constructor(private gymnasesService: GymnasesService, private router: Router ) { }

  ngOnInit() {

  }

  onSubmit(): void {
    this.submitted = false;
    this.gymnasesService.searchBySeanceLibellbe(this.libellle).subscribe(data => {
      this.gymnases = data;
      this.total = this.gymnases.length;
      this.gymnases.forEach(gym => {
        this.seance = gym;
        console.log(this.seance);
        this.submitted = true;
      });
    });
  }
  gymanseDetails(idGymnase: number) {
    this.router.navigate(['/home/gymnase-details', idGymnase]);
  }
}
