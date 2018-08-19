import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

// *NOTE: Containers are smart componets, they directly interact with data

@Component({
  selector: 'stock-inventory',
  styles: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        
        <stock-branch
          [parent]="form">
        </stock-branch>

        <stock-selector
          [parent]="form">
        </stock-selector>

        <stock-products
          [parent]="form">
        </stock-products>

        <div class="stock-inventory__buttons">
          <button 
            type="submit"
            [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent {
  // setting up the structure of the form
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    // formArray allows us to create a collection of 
    // formControls, or formGroups
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}