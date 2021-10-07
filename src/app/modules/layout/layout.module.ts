import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {RentComponent} from "../../component/rent/rent.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RentComponent,
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FormsModule
    ]
})
export class LayoutModule { }
