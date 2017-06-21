/**
 * Created by Dominic on 6/6/2017.
 */

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {BrowserModule} from '@angular/platform-browser';
import {CanActivateViaAuthGuard} from '../../services/auth/auth.gaurd';

const homeRoutes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent,  canActivate: [CanActivateViaAuthGuard]}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(homeRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
