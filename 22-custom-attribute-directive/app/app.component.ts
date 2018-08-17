import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <!-- add the name of your custom directive to the element as an attribute -->
      <label>
        Credit Card Number
        <input 
          name="credit-card" 
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card>
      </label>
    </div>
  `
})
export class AppComponent {
}
