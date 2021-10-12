import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ListUserComponent} from "../../component/admin/list-user/list-user.component";
import {LayoutAdminComponent} from "../../component/admin/layout-admin/layout-admin.component";


@NgModule({
  declarations: [
    LayoutAdminComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
