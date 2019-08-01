import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarEditComponent } from './car-edit/car-edit.component';
import {CarListComponent} from './car-list/car-list.component';
import { HomeComponent } from './home/home.component';

const rooutes: Routes = [
    {
        path: '', redirectTo: '/car-List', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'car-list',
        component: CarListComponent
    },
    {
        path: 'car-add',
        component: CarEditComponent
    },
    {
        path: 'car-edit/:id',
        component: CarEditComponent
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(rooutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}