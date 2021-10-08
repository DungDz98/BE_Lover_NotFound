import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCcdvComponent} from "../../component/user/CCDV/list-ccdv/list-ccdv.component";
import {LayoutComponent} from "../../component/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: ListCcdvComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
