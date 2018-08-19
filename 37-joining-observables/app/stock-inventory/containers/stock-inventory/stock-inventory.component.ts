import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { StockInventoryService } from '../../services/stock-inventory.service';

import { Product, Item } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <stock-branch
          [parent]="form">
        </stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)">
        </stock-selector>

        <stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)">
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
export class StockInventoryComponent implements OnInit {

  products: Product[];

  // setup the product map
  productMap: Map<number, Product>;

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),  
    selector: this.createStock({}),
    stock: this.fb.array([])
  })

  
  constructor(
    // importing the service and dependency injecting inside the contructor
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  ngOnInit() {
    //oberseravble of the cart 
    const cart = this.stockService.getCartItems();
    //oberseravble of the products
    const products = this.stockService.getProducts();

    Observable
      // resolve both cart data and product data at the same time
      .forkJoin(cart, products)
      // subscribe (array desctructuring) to the data and type check it
      .subscribe(([cart, products]: [Item[], Product[]]) => {
        // create the data structure 
        const myMap = products
          .map<[number, Product]>(product => [product.id, product]);
        
        // assign the products the map productMap  
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        // itierate over the cart item
        cart.forEach(item => this.addStock(item));
      });

  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}