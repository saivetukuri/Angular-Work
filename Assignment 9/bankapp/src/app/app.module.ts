import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here

import { Router } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from "./auth.service";
import { MenuService } from "./service/menu.service";
import { MessageService } from "./service/message.service";
import { ErrorLogService } from "./service/log.service";

import { LoginComponent } from './login/login.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KycComponent } from './kyc/kyc.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormvalRoutingModule } from './formval/formval-routing.module';
import { AuthGuard } from "./auth-guard.service";

import {
  RequestCache,
  RequestCacheWithMap
} from "./service/request-cache.service";
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppNavbarComponent,
    SidenavComponent,
    FundtransferComponent,
    DepositComponent,
    KycComponent,
    NameEditorComponent,
    FormValidationComponent,
    MainMenuComponent,
    AccountBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FormvalRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule
  ],
  providers: [AuthService,
    MenuService,
    ErrorLogService,
    AuthGuard,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log("Hi");
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
 }
