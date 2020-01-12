import { Component, OnInit } from '@angular/core';
import { UserService } from '../ecommerce/services/user.service';
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
  selectedUserTab = 1;
  tabs = [
    {
      name: 'Movies >',
      key: 1,
      active: true
    },
     {
     name: 'Musics >',
     key: 2,
     active: false
   },
   {
     name: 'Games >',
     key: 3,
     active: false
   },  
   {
    name: 'Product >',
    key: 4,
    active: false
  },
  {
    name: 'Profile >',
    key: 5,
    active: false
  },
  {
    name: 'Users >',
    key: 6,
    active: false
  }
  ];

tabChange(selectedTab: any) {
   console.log('Tab change');
   this.selectedUserTab = selectedTab.key;
   for (let tab of this.tabs) {
       if (tab.key === selectedTab.key) {
         tab.active = true;
       } else {
         tab.active = false;
       }
   }
 }
 addCategory(){
  this.router.navigate(['addCategory']);
}

updateUser(){
  this.router.navigate(['update/profile', this.id]);
}
  logout(){
    this.token.signOut();
     window.location.reload();
    this.router.navigate(['/home']);
  }
  navigateToLogin() {
    this.router.navigateByUrl('auth/login');
 }
 deleteUser(id: number){
  if(confirm("Are you sure to delete account "+id)){
    this.userService.deleteUser(id).subscribe(
      data => {
      });
  }
  this.logout();
}
}
