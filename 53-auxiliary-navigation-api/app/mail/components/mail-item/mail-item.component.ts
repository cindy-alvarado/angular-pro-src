import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a 
      class="mail-item"
      (click)="navigateToMessage()">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;
  //inject router into the contructor to make it avavible on init
  constructor(private router: Router) {}
  navigateToMessage() {
    this.router.navigate(
      ['', { outlets: { pane: ['message', this.message.id] } }]
    );
  }
}
