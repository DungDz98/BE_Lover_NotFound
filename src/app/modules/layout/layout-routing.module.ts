import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailCcdvComponent} from "../../conponent/User/CCDV/detail-ccdv/detail-ccdv.component";


const routes: Routes = [
  {
    path: 'edit/:id', component: DetailCcdvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
