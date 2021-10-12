import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminCategoryComponent} from "../../component/admin-component/admin-category/admin-category.component";
import {AdminHomeComponent} from "../../component/admin-component/admin-home/admin-home.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
