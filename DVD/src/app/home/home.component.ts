import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
  }
  ];

tabChange(selectedTab: any) {
   console.log('### tab change');
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

}
