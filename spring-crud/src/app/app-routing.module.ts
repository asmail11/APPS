import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
 
const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    {path: 'employee', component: EmployeeDetailsComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'addemployee', component: CreateEmployeeComponent},
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }