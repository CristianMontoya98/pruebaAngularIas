import { Observable } from "rxjs";
import { DepartmentGateway } from "src/domain/gateway/departmentGateway";
import { Department } from "src/domain/models/department/department";
import {HttpClient} from '@angular/common/http';

export class DepartmentApiService extends DepartmentGateway {
  constructor(private http:HttpClient){
    super();
  }
  getDepartments(): Observable<Department[]> {
    const url = 'https://api-colombia.com/api/v1/Department';
    return this.http.get<Array<Department>>(url);
  }
  
}