import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserformComponent } from './components/userform/userform.component';

const appRoutes :Routes = [
  {path : '',component:ListuserComponent},
  {path : 'add',component:UserformComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
