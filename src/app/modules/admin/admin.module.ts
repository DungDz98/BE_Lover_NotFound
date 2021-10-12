import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {NavbarAdminComponent} from "../../component/admin-component/navbar-admin/navbar-admin.component";
import {AdminCategoryComponent} from "../../component/admin-component/admin-category/admin-category.component";
import {SidebarAdminComponent} from "../../component/admin-component/sidebar-admin/sidebar-admin.component";



@NgModule({
  declarations: [
    NavbarAdminComponent,
    AdminCategoryComponent,
    SidebarAdminComponent
  ],
  exports: [
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
