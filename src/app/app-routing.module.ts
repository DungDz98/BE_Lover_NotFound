import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./component/layout/layout.component";
import {LayoutAdminComponent} from "./component/admin-component/layout-admin/layout-admin.component";



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import('./modules/layout/layout.module').then(module => module.LayoutModule)
  },

  {
    path: "admin",
    component: LayoutAdminComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
