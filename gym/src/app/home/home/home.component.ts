import { Component, OnInit, ViewChild } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gymnases: Gymnases[] = [];
  g: Gymnases = new Gymnases();
  name: string;
  submitted = false;

  constructor(private gymnasesService: GymnasesService, private router: Router) { }

  ngOnInit() {
    this.gymnasesService.getAllGymnases().subscribe(data  => {
      this.gymnases = data;
      console.log(this.gymnases);
    });
  }
  gymanseDetails() {
    this.router.navigate(['findByCity']);
  }


}
