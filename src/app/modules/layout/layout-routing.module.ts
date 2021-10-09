import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailCcdvComponent} from "../../conponent/User/CCDV/detail-ccdv/detail-ccdv.component";
// import {DkiDichvuComponent} from "../../conponent/User/CCDV/dki-dichvu/dki-dichvu.component";


const routes: Routes = [
  {
    path: 'edit/:id', component: DetailCcdvComponent,
  },
  // {
  //   path: 'service', component: DkiDichvuComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
