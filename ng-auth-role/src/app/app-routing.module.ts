import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { Role } from './_models/role';
import { LoginComponent } from './login/login/login.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Admin] } 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);