import { Component, OnInit } from '@angular/core';
import { UpdateProfile } from '../auth/update-prodile';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../ecommerce/services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  id: number;
  updateProdile: UpdateProfile = new UpdateProfile();
  submitted = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateProdile = new UpdateProfile();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUSerById(this.id)
    .subscribe(data => {
       console.log(data);
       this.updateProdile = data;
    }, error => console.log(error));

    this.submitted = false;
    this.updateProdile = new UpdateProfile;
  }

  save(){
    this.userService.updateUser(this.updateProdile)
    .subscribe(data => console.log(data), error => console.log(error));
    this.updateProdile = new UpdateProfile;
  }
  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigateByUrl('user');
  }
  navigateToLogin() {
    this.router.navigateByUrl('user');
 }

}
