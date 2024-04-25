import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './config/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/home/home.component';
import { AddressComponent } from './UI/address/address.component';
import { DateDeliveryComponent } from './UI/date-delivery/date-delivery.component';
import { DeliveryComponentComponent } from './UI/address/components/delivery-component/delivery-component.component';
import { DisplayComponentComponent } from './UI/address/components/display-component/display-component.component';
import { DeliveryDateComponentComponent } from './UI/date-delivery/components/delivery-date-component/delivery-date-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetDepartmentsUseCase } from 'src/domain/useCase/getDepartmentUseCase';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressComponent,
    DateDeliveryComponent,
    DeliveryComponentComponent,
    DisplayComponentComponent,
    DeliveryDateComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [GetDepartmentsUseCase],
  bootstrap: [AppComponent]
})
export class AppModule { }
