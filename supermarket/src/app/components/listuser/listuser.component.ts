import { Component, OnInit } from '@angular/core';
import{UserService} from '../../shared_service/user.service';
import{User}  from '../../user';
import{Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private users:User[];

  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit() {
    this._userService.getItems().subscribe((users) => {
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }

  deleteItem(user){
    this._userService.deleteItem(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
      this._router.navigate(['']);
    },(error)=>{
      console.log(error);
    });
  }
  saveOrUpdateItem(user){
    this._userService.setter(user);
    this._router.navigate(['/add']);
  }
  newItem(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/add']);
  }

}
