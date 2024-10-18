import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { RouterLink } from '@angular/router';
import {NgFor, AsyncPipe, DatePipe, NgIf} from '@angular/common';
import {Employee} from "../model/employee";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe, NgIf]
})
export class EmployeesComponent implements OnInit{
  protected employeeService: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
  loading = true;
  error = undefined;

  ngOnInit() {
    this.employeeService.get().subscribe({
      next: employees => {
        this.employees = employees;
        this.loading = false;
      },
      error: error => {
        this.error = error;
        this.loading = false;
      },
      complete: () => this.loading = false
    })
  }
}
