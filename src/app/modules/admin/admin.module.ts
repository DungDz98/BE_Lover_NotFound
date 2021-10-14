import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {LayoutAdminComponent} from "../../component/admin/layout-admin/layout-admin.component";
import {ListUserComponent} from "../../component/admin/list-user/list-user.component";
import {NgxPaginationModule} from "ngx-pagination";
import {NavbarAdminComponent} from "../../component/admin/navbar-admin/navbar-admin.component";
import {AdminCategoryComponent} from "../../component/admin-component/admin-category/admin-category.component";
import {SidebarAdminComponent} from "../../component/admin-component/sidebar-admin/sidebar-admin.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {AdminHomeComponent} from "../../component/admin-component/admin-home/admin-home.component";
import {RentAdminComponent} from "../../component/admin/rent-admin/rent-admin.component";
import {FormsModule} from "@angular/forms";
import {GdtcAdminComponent} from "../../component/admin/gdtc-admin/gdtc-admin.component";


@NgModule({
  declarations: [
    LayoutAdminComponent,
    ListUserComponent,
    NavbarAdminComponent,
    AdminCategoryComponent,
    SidebarAdminComponent,
    AdminHomeComponent,
    RentAdminComponent,
    GdtcAdminComponent
  ],
  exports: [
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule
  ]
})
export class AdminModule {
}
