/**
 * Created by dominic on 21/6/17.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {CanActivateViaAuthGuard} from './services/auth/auth.gaurd';
import {LoginComponent} from './modules';

const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', canActivate: [CanActivateViaAuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
