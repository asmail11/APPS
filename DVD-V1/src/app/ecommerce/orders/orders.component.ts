import { Component, OnInit } from '@angular/core';
import { ProductOrders } from '../models/product-orders.model';
import {Subscription} from "rxjs/internal/Subscription";
import { EcommerceService } from '../services/ecommerce.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;
    info: any;

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

    newDate: Date;

    constructor(private ecommerceService: EcommerceService, private userService: UserService, 
        private token: TokenStorageService, private datePipe: DatePipe, private router: Router) {
        this.orders = this.ecommerceService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities
          };
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

          this.newDate = new Date();
          console.log(this.datePipe.transform(this.newDate,"yyyy-MM-dd"));
    }

    pay() {
        this.paid = true;
        this.ecommerceService.saveOrder(this.orders).subscribe();
    }

    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.total = this.ecommerceService.Total;
        });
    }
    logout(){
        this.token.signOut();
        window.location.reload();
      }
      goToHome(){
        this.router.navigate(['/auth/login']);
      }
}
