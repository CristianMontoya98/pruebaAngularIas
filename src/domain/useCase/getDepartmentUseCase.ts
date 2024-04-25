import { Observable } from "rxjs";
import { DepartmentGateway } from "../gateway/departmentGateway";
import { Department } from "../models/department/department";
import { Injectable } from "@angular/core";
@Injectable ({
  providedIn:'root'
})
export class GetDepartmentsUseCase {
  constructor(private departmentGateway:DepartmentGateway){
  }
  getAllDepartments(): Observable<Array<Department>> {
    return this.departmentGateway.getDepartments();
  }
}