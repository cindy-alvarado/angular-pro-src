import { Directive, HostListener, ElementRef } from '@angular/core';

// Binds a CSS event to a host listener and supplies configuration metadata. 
// Angular invokes the supplied handler method when the host element emits the specified 
// event, and updates the bound element with the result. 
// If the handler method returns false, applies preventDefault on the bound element.

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // host - elemt we have bound the event too
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    // format the credit card number as the user is typing it in
    // restrict the user from typing in any more then 16 digits
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
}