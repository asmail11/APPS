import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  host = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getVilles() {
    return this.http.get(this.host + '/villes');
  }

  getCinema(ville: any) {
    return this.http.get(ville._links.cinemas.href);
  }

  getSalles(c: any) {
    return this.http.get(c._links.salles.href);
  }

  getProjections(salle: any) {
    const url = salle._links.projections.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=p1');
  }

  getTicketPlaces(p: any) {
    const url = p._links.tickets.href.replace('{?projection}', '');
    return this.http.get(url + '?projection=ticketsProj');
  }

  payerTickets(t) {
    return this.http.post(this.host + '/payerTickes', t);
  }
}
