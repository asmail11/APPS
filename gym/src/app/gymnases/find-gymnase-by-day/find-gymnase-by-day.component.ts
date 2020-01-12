import { Component, OnInit } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-gymnase-by-day',
  templateUrl: './find-gymnase-by-day.component.html',
  styleUrls: ['./find-gymnase-by-day.component.css']
})
export class FindGymnaseByDayComponent implements OnInit {
  gymnases: Gymnases[] = [];
  seance: Gymnases = new Gymnases();
  submitted = false;
  day: string;
  total: number;

  constructor(private gymnasesService: GymnasesService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(): void {
    this.submitted = false;
    this.gymnasesService.searchBySeanceDay(this.day).subscribe(data => {
      this.gymnases = data;
      this.total = this.gymnases.length;
      this.gymnases.forEach(gym => {
        this.seance = gym;
        this.submitted = true;
      });
    });
  }
  gymanseDetails(idGymnase: number) {
    this.router.navigate(['/home/gymnase-details', idGymnase]);
  }
}
