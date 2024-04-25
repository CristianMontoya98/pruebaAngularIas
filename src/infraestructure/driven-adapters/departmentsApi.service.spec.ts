import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentApiService } from './departmentsApi.service';

describe('AddressComponent', () => {
  let service: DepartmentApiService;
  let fixture: ComponentFixture<DepartmentApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentApiService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
