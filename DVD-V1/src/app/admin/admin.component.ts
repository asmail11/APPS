import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;
  name: string
  username: string;
  email: string;
  password: string;
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  cvv: number;
  expYear: string;
  address: string;
  city: string;
  zip: number;
  state: string;
  errorMessage: string;

  info: any;

  constructor(private userService: UserService, private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    
    this.userService.getUSerByUsername(this.token.getUsername()).subscribe(
      data => {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
        this.nameOnCard = data.nameOnCard;
        this.cardNumber = data.cardNumber;
        this.expMonth = data.expMonth;
        this.cvv = data.cvv;
        this.expYear = data.expYear;
        this.address = data.address;
        this.city = data.city;
        this.zip = data.zip;
        this.state = data.state;

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      name: this.token.getName(),
    };

  }

  logout(){
    this.token.signOut();
     window.location.reload();
    this.router.navigate(['/home']);
  }
}
