import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { Observable } from 'rxjs/Observable';

// pluck operator 
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title | async }}</h2>
    <!-- display the mail items : i.e.: inbox mail folder from a mail client --> 
    <!-- async pipe allows you to subscribe to the observable --> 
    <mail-item
      *ngFor="let message of (messages | async)"
      [message]="message">
    </mail-item>
  `
})

// injet the router and acces the resolve data 
export class MailFolderComponent {
  // .puck allows you to take part of the data property on the data object i.e.: messages 
  messages: Observable<Mail[]> = this.route.data.pluck('messages');
  // .puck allows you to take part of the data property on the data object  i.e.: name (inbox, trash)
  title: Observable<string> = this.route.params.pluck('name');
  constructor(private route: ActivatedRoute) {}
}
