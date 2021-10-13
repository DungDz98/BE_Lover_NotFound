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

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RentPayerComponent,
    ProfileProviderComponent,

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
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
