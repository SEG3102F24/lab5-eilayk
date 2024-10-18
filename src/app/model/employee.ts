import { Timestamp } from "@angular/fire/firestore";

export class Employee {
  constructor(
    public name: string,
    public dateOfBirth: Timestamp,
    public city: string,
    public salary: number,
    public gender?: string,
    public email?: string,
    public id?: string,
  ) {}
}
