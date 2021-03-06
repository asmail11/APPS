import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/sigup-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  active = false;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() { }

  onSubmit(){
    console.log(this.form);
      this.signupInfo = new SignUpInfo(
       this.form.name,
      this.form.nameOnCard,
      this.form.cardNumber,
      this.form.expMonth,
      this.form.cvv,
      this.form.expYear,
      this.form.fullname,
      this.form.email,
      this.form.address,
      this.form.city,
      this.form.zip,
      this.form.state,
      this.form.username,
      this.form.password,
      this.form.active = this.active);

      this.authService.signUp(this.signupInfo).subscribe(
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
