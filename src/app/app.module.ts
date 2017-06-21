import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule, LoginModule, HomeModule} from './modules/index';

import {MdCardModule} from '@angular/material';

import 'hammerjs';
import {AuthService} from './services/auth/auth.service';
import {CanActivateViaAuthGuard} from './services/auth/auth.gaurd';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.route.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdCardModule,
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
    LoginModule,
    HomeModule
  ],
  providers: [AuthService, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
