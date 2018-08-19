import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Reactive forms allows use to use the component as your template 
// rather the default

import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}