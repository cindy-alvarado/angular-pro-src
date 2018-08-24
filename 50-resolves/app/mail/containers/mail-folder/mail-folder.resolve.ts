import { Injectable } from '@angular/core';

// resolve is imported from angular core
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

// acts as a middleware beteen the component and the router so that when it actually resolves 
// the component gets the information via the router 
@Injectable()
// impemented as a interface on the class as an array on out mail object
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}
  // we call the service here must be called resolve 
  // route: ActivatedRouteSnapshot - contains info about the current routing url params query params url fragments or data about the route
  // state: RouterStateSnapshot - reps the state of the route at the time the fucntion was called info about the roy=uter tree nodes about the current state of the router 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.mailService.getFolder(route.params.name);
  }
}