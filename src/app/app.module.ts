import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

//de phan trang
import {NgxPaginationModule} from "ngx-pagination";
import { RentPayerComponent } from './component/rent-payer/rent-payer.component';
import { ProfileProviderComponent } from './component/profile-provider/profile-provider.component';
import {RouterModule} from "@angular/router";
import { LayoutAdminComponent } from './component/admin-component/layout-admin/layout-admin.component';
import {AdminModule} from "./modules/admin/admin.module";
import { AdminHomeComponent } from './component/admin-component/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProfileUserComponent } from './component/user/SDDV/profile-user/profile-user.component';
import { SocketHomeComponent } from './component/socket/socket-home/socket-home.component';
import {LayoutModule} from "./modules/layout/layout.module";
import { ErrorAuthenticationComponent } from './error-authentication/error-authentication.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RentPayerComponent,
    ProfileProviderComponent,
    LayoutAdminComponent,
    ProfileUserComponent,
    SocketHomeComponent,
    ErrorAuthenticationComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
        NgxPaginationModule,
        RouterModule,
        AdminModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatSidenavModule,
        LayoutModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
