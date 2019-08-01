import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';


@Component({templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}