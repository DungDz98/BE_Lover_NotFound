import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutAdminComponent } from 'src/app/component/admin/layout-admin/layout-admin.component';
import {RentAdminComponent} from "../../component/admin/rent-admin/rent-admin.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {GdtcAdminComponent} from "../../component/admin/gdtc-admin/gdtc-admin.component";


@NgModule({
  declarations: [
    LayoutAdminComponent,
    RentAdminComponent,
    GdtcAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule { }
