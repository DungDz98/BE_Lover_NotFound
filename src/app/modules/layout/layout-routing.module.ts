import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentComponent} from "../../component/rent/rent.component";
import {RentPayerComponent} from "../../component/rent-payer/rent-payer.component";
import {ProfileProviderComponent} from "../../component/profile-provider/profile-provider.component";

const routes: Routes = [
  {
    path : 'rents/provider/:id',
    component : RentComponent
  },
  {
    path : 'rents/payer/:id',
    component : RentPayerComponent
  },{
    path : 'provider-profile/:id',
    component : ProfileProviderComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
