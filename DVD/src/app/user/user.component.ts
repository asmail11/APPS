import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
listUsers: any;
currentUser = {id: -1}

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/api/users').subscribe((res) => {
      console.log(res);
      this.listUsers = res;
    }, (error) => console.log(error));
  }

  onGetUsers(user: any){
    this.currentUser=user;
    this.httpClient.get('http://localhost:8080/api/users/'+user.id).subscribe((res) => {
      console.log(res);
      this.listUsers = res;
    }, (error) => console.log(error));
  }

}
