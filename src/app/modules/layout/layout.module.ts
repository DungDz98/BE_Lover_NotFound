import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailCcdvComponent} from "../../component/user/CCDV/detail-ccdv/detail-ccdv.component";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from "../../component/layout/layout.component";
import {NavbarComponent} from "../../component/blocks/navbar/navbar.component";
import {FooterComponent} from "../../component/blocks/footer/footer.component";
import {ListCcdvComponent} from "../../component/user/CCDV/list-ccdv/list-ccdv.component";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RentComponent} from "../../component/rent/rent.component";
import { CheckCcdvComponent } from 'src/app/component/user/CCDV/check-ccdv/check-ccdv/check-ccdv.component';
// import {CheckCcdvComponent} from "../../component/user/CCDV/check-ccdv/check-ccdv/check-ccdv.component";

@NgModule({
  declarations: [
    DetailCcdvComponent,
    CheckCcdvComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ListCcdvComponent,
    RentComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    ReactiveFormsModule,
    FormsModule
  ]
})

export class LayoutModule { }

