import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDateComponentComponent } from './delivery-date-component.component';

describe('DeliveryDateComponentComponent', () => {
  let component: DeliveryDateComponentComponent;
  let fixture: ComponentFixture<DeliveryDateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
