import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeServiceService } from '../employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    hireDate: new Date(),
  };

  message = '';

  ngOnInit(): void {
    this.message = '';
    const id = this.route.snapshot.params['id'];
    this.getEmployeeById(id);
  }

  constructor(
    private employeeService: EmployeeServiceService,
    private Router: Router,
    private route: ActivatedRoute
  ) {}

  getEmployeeById(id: any): void {
    this.employeeService.get(id).subscribe({
      next: (data) => {
        this.currentEmployee = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }

  updateEmployee(): void {
    this.message = '';
    this.employeeService
      .update(this.currentEmployee.id, this.currentEmployee)
      .subscribe({
        next: (data) => {
          this.Router.navigate(['/']);
          this.message = data.message
            ? data.message
            : 'The status was successfully updated';
          console.log(data);
        },
        error: (e) => console.log(e),
      });
  }
}
