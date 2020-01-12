import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CinemaService} from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  public villes;
  public cinemas;
  public salles;
  public  currentVille;
  public currentCinema;
  public currentProjection;
  private selectedTickets: any[];

  constructor(public cinemaService: CinemaService) { }

  ngOnInit() {
    this.cinemaService.getVilles()
      .subscribe(data => {
      this.villes = data;
      }, error => {
          console.log(error);
      });
  }

  onGetCinema(ville: any) {
    this.currentVille = ville;
    this.salles = undefined;
    this.cinemaService.getCinema(ville)
       .subscribe(data => {
         this.cinemas = data;
       }, error => {
         console.log(error);
       });
  }

  onGetSalle(c: any) {
    this.currentCinema = c;
    this.cinemaService.getSalles(c)
      .subscribe(data => {
        this.salles = data;
        this.salles._embedded.salles.forEach(salle => {
           this.cinemaService.getProjections(salle).subscribe(salles => {
             salle.projections = salles;
           });
        });
      }, error => {
        console.log(error);
      });
  }

  onGetPlaces(p: any) {
    this.currentProjection = p;
    this.cinemaService.getTicketPlaces(p)
      .subscribe(data => {
      this.currentProjection.tickets = data;
      this.selectedTickets = [];
    });
  }

  onSelectTicket(t: any) {
     if (!t.selected) {
       t.selected = true;
       this.selectedTickets.push(t);
     } else {
       t.selected = false;
       this.selectedTickets.slice(this.selectedTickets.indexOf(t), 1);
     }
     console.log(this.selectedTickets);

  }

  getTicketClass(t: any) {
    let str = 'btn ';
    if (t.reserve === true) {
      str += 'btn-danger';
    } else if (t.selected) {
      str += 'btn-warning';
    } else {
      str += 'btn-success';
    }
    return str;
  }

  onPayTicket(f) {
   const tickets = [];
   this.selectedTickets.forEach(t => {
     tickets.push(t.id);
   });
   f.tickets = tickets;
   this.cinemaService.payerTickets(f).subscribe(data => {
     alert('Tickets Réservés avec success !');
     this.onGetPlaces(this.currentProjection);
   });
  }
}
