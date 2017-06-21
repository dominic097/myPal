/**
 * Created by Dominic on 6/6/2017.
 */

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';

const loginRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(loginRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule {
}
