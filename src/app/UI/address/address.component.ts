import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Department } from 'src/domain/models/department/department';
import { GetDepartmentsUseCase } from 'src/domain/useCase/getDepartmentUseCase';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
  addressForm = new FormGroup({
    department: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl
  })
  response$: Observable<Department[]> | undefined;
  departments?:Department[];
  constructor(private getDepartmentsUseCase:GetDepartmentsUseCase){}
  ngOnInit(){
    this.response$ = this.getDepartmentsUseCase.getAllDepartments();
    this.response$.subscribe((data:Department[]) => {
      this.departments = data;
    })
  }
}
