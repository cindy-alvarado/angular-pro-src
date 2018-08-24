// Debugging: when testing use the Network tab of  chrome dev tools to verify the order that the modules are getting loaded. 
// change the preload propety to false. 


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import PreloadingStrategy from angular/router
import { RouterModule, Route, Routes, PreloadingStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';


// preload class implements PreloadStrategy 
export class CustomPreload implements PreloadingStrategy {
  // line 18 taken from angular source code (command click on the angular module to see source code) 
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // of imported from rxjs
    return route.data && route.data.preload ? fn() : Observable.of(null);
  }
}

export const ROUTES: Routes = [
  // the preload property tells angular to only preload the dashboard module  
  { path: 'dashboard', data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [CustomPreload],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    // PreloadAll is replaced with CustomPreload
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
