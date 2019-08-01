import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MATERIAL_SANITY_CHECKS } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatListModule, 
    MatInputModule, 
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [{provide: MATERIAL_SANITY_CHECKS,
    useValue: false}],
  bootstrap: [AppComponent]
})
export class AppModule { }
