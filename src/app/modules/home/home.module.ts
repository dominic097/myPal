/**
 * Created by Dominic on 6/21/2017.
 *
 * */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared-module/shared-module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  bootstrap: [],
  providers: []
})
export class HomeModule {
}

