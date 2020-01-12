import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AdminInfo } from '../auth/admin-info';

@Component({
  selector: 'app-add-addmin',
  templateUrl: './add-addmin.component.html',
  styleUrls: ['./add-addmin.component.css']
})
export class AddAddminComponent implements OnInit {
  form: any = {};
  signupInfo: AdminInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  active = true;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  
  }
  onSubmit(){
    console.log(this.form);
      this.signupInfo = new AdminInfo(
        this.form.name,
        this.form.nameOnCard = 'admin',
        this.form.cardNumber = '1111-222-3333-4444',
        this.form.expMonth = 'Septmber',
        this.form.cvv = 123,
        this.form.expYear = '2019',
        this.form.fullname = 'Issamdrmas',
        this.form.email,
        this.form.address = 'Rue de vincinne 18',
        this.form.city = 'Paris',
        this.form.zip = 75000,
        this.form.state = 'FR',
        this.form.username,
        this.form.password,
        this.form.active = this.active);

      this.authService.signUpAdmin(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
      console.log("test")
  }
  navigateToLogin() {
    this.router.navigateByUrl('auth/login');
 }
}
