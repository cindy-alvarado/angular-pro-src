import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

// import mail folder resolve 
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

// resolves: preload data before you navagate to a particular route
// to add a resoleve add a rsolve property to the object in the module file
export const ROUTES: Routes = [
  {
    // what route / path 
    path: 'folder/:name',
    // what componet
    component: MailFolderComponent,
    // what data 
    resolve: {
      messages: MailFolderResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent
  ],
  // add the Service and the resolve as a provider
  providers: [
    MailService,
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
