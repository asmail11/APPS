import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService, private listCustomer: CustomerListComponent) { }

  ngOnInit() {
    
  }

  updateActive(isActive: boolean){

    this.customerService.updateCustomer(this.customer.id,
      {firstname: this.customer.firstname, lastname: this.customer.lastname, age: this.customer.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        }, error => console.log(error));
        
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer.id)
    .subscribe(
      data => {
        console.log(data);
        this.listCustomer.reloadData();
      }, error => console.log(error));
  }

}
