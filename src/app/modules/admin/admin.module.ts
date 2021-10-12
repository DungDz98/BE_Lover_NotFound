import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {LayoutAdminComponent} from "../../component/admin/layout-admin/layout-admin.component";
import {ListUserComponent} from "../../component/admin/list-user/list-user.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    LayoutAdminComponent,
    ListUserComponent,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgxPaginationModule
    ]
})
export class AdminModule { }
