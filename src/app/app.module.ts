import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './conponent/layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import { DkiDichvuComponent } from './conponent/User/CCDV/dki-dichvu/dki-dichvu.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DkiDichvuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
        ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
