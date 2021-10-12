import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCcdvComponent} from "../../component/user/CCDV/list-ccdv/list-ccdv.component";
import {SignInComponent} from "../../component/sign-in/sign-in.component";
import {SignUpComponent} from "../../component/sign-up/sign-up.component";
import {DetailCcdvComponent} from "../../component/user/CCDV/detail-ccdv/detail-ccdv.component";
import {RentComponent} from "../../component/rent/rent.component";
import {RentPayerComponent} from "../../component/rent-payer/rent-payer.component";
import {ProfileProviderComponent} from "../../component/profile-provider/profile-provider.component";
import { CheckCcdvComponent } from 'src/app/component/user/CCDV/check-ccdv/check-ccdv/check-ccdv.component';
import {EditCcdvComponent} from "../../component/user/CCDV/edit-ccdv/edit-ccdv.component";


const routes: Routes = [
  {
    path: '',
    component: ListCcdvComponent,
  },
  {
    path: 'serviceccdv',
    component: CheckCcdvComponent,
  },

  {
    path: 'edit/:id', component: DetailCcdvComponent,
  },
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
  {
    path : 'provider-profile/edit/:id',
    component : EditCcdvComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
