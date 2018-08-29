import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import store  and add as a provider
import { Store } from './store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
