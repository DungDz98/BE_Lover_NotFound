import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./component/sign-in/sign-in.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";
import {LayoutComponent} from "./component/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import('./modules/layout/layout.module').then(module => module.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
