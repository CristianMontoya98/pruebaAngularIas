import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../UI/home/home.component';
import { AddressComponent } from '../UI/address/address.component';
import { DateDeliveryComponent } from '../UI/date-delivery/date-delivery.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
},
{
  path:'address',
  component: AddressComponent
},
{
  path:'date-delivery',
  component: DateDeliveryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
