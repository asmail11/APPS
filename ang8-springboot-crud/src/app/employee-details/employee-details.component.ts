import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 employee: Employee;
 id: number;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
        .subscribe(data => {
      console.log(data);
    this.employee = data;  
    }, error => console.log(error));
  }
  updateActive(isActive: boolean){
    this.employeeService.updateEmployee(
      this.employee.id,
     {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      emailId: this.employee.emailId,
      active: isActive
     })
     .subscribe(
       data => {
         console.log(data);
         this.employee = data as Employee;
       },
        error => console.log(error));
     
  }

  list(){
    this.router.navigate(['employees']);
  }

}
