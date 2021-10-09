import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCcdvComponent} from "../../component/user/CCDV/list-ccdv/list-ccdv.component";
import {SignInComponent} from "../../component/sign-in/sign-in.component";
import {SignUpComponent} from "../../component/sign-up/sign-up.component";
import {DetailCcdvComponent} from "../../component/user/CCDV/detail-ccdv/detail-ccdv.component";


const routes: Routes = [
  {
    path: '',
    component: ListCcdvComponent,
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },
  {
    path: 'edit/:id', component: DetailCcdvComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
