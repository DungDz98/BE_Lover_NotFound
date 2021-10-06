import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentComponent} from "../../component/rent/rent.component";

const routes: Routes = [
  {
    path : 'rents/:id',
    component : RentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
