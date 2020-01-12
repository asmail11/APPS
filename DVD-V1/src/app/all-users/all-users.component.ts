import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../ecommerce/services/user.service';
import { UserInfo } from '../user/userInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
     users: Observable<UserInfo[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
    this.users.forEach(user => {
      console.log(user);
      user.forEach(u => {
        console.log(u.active);
      })
    })
  }

  deleteUser(id: number){
    if(confirm("Are you sure to delete account "+id)){
      this.userService.deleteUser(id).subscribe(
        data => {
        }, error => console.log(error));
    }
    window.location.reload();
  }
  reloadData(){
    this.users = this.userService.getAllUsers();
  }
}
