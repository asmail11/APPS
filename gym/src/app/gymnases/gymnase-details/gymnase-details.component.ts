import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Gymnases } from 'src/app/model/gymnases';

@Component({
  selector: 'app-gymnase-details',
  templateUrl: './gymnase-details.component.html',
  styleUrls: ['./gymnase-details.component.css']
})
export class GymnaseDetailsComponent implements OnInit {
  idGymnase: number;
  gymnase: Gymnases[];
  g: Gymnases = new Gymnases();
  constructor(private route: ActivatedRoute, private router: Router, private gymnaseService: GymnasesService) { }

  ngOnInit() {
    this.idGymnase = this.route.snapshot.params.idGymnase;
    this.gymnaseService.getByIdGymnase(this.idGymnase).subscribe((data: any[]) => {
    this.gymnase = data;
    this.gymnase.forEach(g => {
     this.g = g;
    });
    });
  }

}
