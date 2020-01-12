import { Component, OnInit } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-find-gymnase-by-name',
  templateUrl: './find-gymnase-by-name.component.html',
  styleUrls: ['./find-gymnase-by-name.component.css']
})
export class FindGymnaseByNameComponent implements OnInit {
  gymnases: Gymnases[] = [];
  gByName: Gymnases[];
  g: Gymnases = new Gymnases();
  name: string;
  submitted = false;
  total: number;

  constructor(private gymnasesService: GymnasesService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(name: string): void {
    this.gymnasesService.searchByName(name).subscribe(data => {
      this.gymnases = data;
      this.total = this.gymnases.length;
      this.gymnases.forEach(gByName => {
       this.gByName = this.gymnases;
       this.submitted = true;
      });
    });
  }
  gymanseDetails(idGymnase: number) {
    console.log(idGymnase);
    this.router.navigate(['/home/gymnase-details/', idGymnase]);
  }
}
