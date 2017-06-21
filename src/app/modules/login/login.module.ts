/**
 * Created by Dominic on 6/21/2017.
 *
 * */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared-module/shared-module';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent],
  bootstrap: [],
  providers: []
})
export class LoginModule {
}

