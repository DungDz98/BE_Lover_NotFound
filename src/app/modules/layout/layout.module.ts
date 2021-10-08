import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailCcdvComponent} from "../../conponent/User/CCDV/detail-ccdv/detail-ccdv.component";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import {LayoutRoutingModule} from "./layout-routing.module";

@NgModule({
  declarations: [
 DetailCcdvComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    ReactiveFormsModule
  ]
})
export class LayoutModule { }

