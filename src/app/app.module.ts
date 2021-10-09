import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { RentComponent } from './component/rent/rent.component';
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './component/layout/layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RentPayerComponent } from './component/rent-payer/rent-payer.component';
import { ProfileProviderComponent } from './component/profile-provider/profile-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RentPayerComponent,
    ProfileProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
