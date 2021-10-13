import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutAdminComponent} from "../../component/admin/layout-admin/layout-admin.component";
import {RentAdminComponent} from "../../component/admin/rent-admin/rent-admin.component";
import {GdtcAdminComponent} from "../../component/admin/gdtc-admin/gdtc-admin.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
  },
  {
    path: 'rent',
    component: RentAdminComponent,
  },
  {
    path: 'transaction',
    component: GdtcAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
