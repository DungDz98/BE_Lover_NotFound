import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./component/sign-in/sign-in.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {LayoutAdminComponent} from "./component/admin/layout-admin/layout-admin.component";
import {SocketHomeComponent} from "./component/socket/socket-home/socket-home.component";
import {ErrorAuthenticationComponent} from "./error-authentication/error-authentication.component";

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
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'create',
    component: SignUpComponent
  },
  {
    path: 'socket',
    component: SocketHomeComponent
  },
  {
    path: 'error-403',
    component: ErrorAuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
