import { Component, OnInit } from '@angular/core';
import{User}  from '../../user';
import{Router}  from '@angular/router';
import{UserService} from '../../shared_service/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  private user:User;

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }
  processForm(){
    if(this.user.id==undefined){
      this._userService.addItem(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/add']);
      },(error)=>{
        console.log(error);
      })
    }else{
      this._userService.saveOrUpdateItem(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
      })
    }
  }
}
