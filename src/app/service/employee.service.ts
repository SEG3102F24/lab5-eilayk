import {inject, Injectable} from '@angular/core';
import {from, Observable, throwError} from "rxjs";
import {Employee} from "../model/employee";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  get(): Observable<Employee[]> {
    const employees = collection(this.firestore, "employees");
    return collectionData(employees, {idField: "id"}) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee) {
    const employees = collection(this.firestore, "employees");
    delete employee.id;
    try {
      return from(addDoc(employees, {...employee}));
    } catch (e) {
      return throwError(() => e);
    }
  }
}
