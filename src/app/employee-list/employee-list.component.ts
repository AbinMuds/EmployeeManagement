import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees?: Employee[];
  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    hireDate: new Date(),
  };
  ngOnInit(): void {
    this.getAllEmployee();
  }

  constructor(private employeeService: EmployeeServiceService) {}

  getAllEmployee(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (e) => console.log(e),
    });
  }

  getEmployeeById(id: number): void {
    this.employeeService.get(id).subscribe({
      next: (data) => {
        this.currentEmployee = data;
      },
      error: (e) => console.log(e),
    });
  }

  removeAllEmployees(): void {
    this.employeeService.deleteAll().subscribe({
      next: (data) => {
        this.getAllEmployee();
      },
      error: (e) => console.log(e),
    });
  }

  deleteEmployeeById(id: any): void {
    this.employeeService.delete(id).subscribe({
      next: (data) => {
        this.getAllEmployee();
      },
      error: (e) => console.log(e),
    });
  }
}
