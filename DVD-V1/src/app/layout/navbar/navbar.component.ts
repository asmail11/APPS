import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
         if(role === 'ROLE_ADMIN'){
           this.authority = 'admin';
           return false;
         }
         this.authority = 'user';
         return true;
      });
    }
    console.log(this.authority);
  }
 search(){
   this.router.navigate(['search']);
 }

 switchLanguage(language: string) {
  this.translate.use(language);
}
}
