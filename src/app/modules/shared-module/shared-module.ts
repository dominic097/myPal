/**
 * Created by Dominic on 6/8/2017.
 */


import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import App Components
import {appComponents} from '../../components/index';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: appComponents,
  declarations: appComponents,
  bootstrap: [],
  providers: []
})
export class SharedModule {
}
