import { Observable } from "rxjs";
import { Department } from "../models/department/department";

export abstract class DepartmentGateway {
  abstract getDepartments(): Observable<Array<Department>>
}