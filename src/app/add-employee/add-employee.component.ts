import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    hireDate: new Date(),
  };
  submitted = false;

  constructor(private employeeService: EmployeeServiceService) {}
  saveEmployee(): void {
    if (!this.isFormValid()) {
      return;
    }
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      dob: this.employee.dob,
      hireDate: this.employee.hireDate,
    };

    this.employeeService.storeData(data).subscribe({
      next: (data) => {
        this.submitted = true;
      },
      error: (e) => console.log(e),
    });
  }

  isFormValid(): boolean {
    return (
      this.employee &&
      this.employee.firstName !== undefined &&
      this.employee.firstName.trim() !== '' &&
      this.employee.lastName !== undefined &&
      this.employee.lastName.trim() !== '' &&
      this.employee.dob !== undefined &&
      this.employee.hireDate !== undefined
    );
  }

  clearInputData() {
    this.submitted = false;
    this.employee = {
      firstName: '',
      lastName: '',
      dob: new Date(),
      hireDate: new Date(),
    };
  }
}
