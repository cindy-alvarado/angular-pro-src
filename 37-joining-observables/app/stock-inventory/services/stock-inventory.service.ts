//  ** NOTE: Dont forget import what is needed to make data calls via rxjs and angular

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  // dependency injection
  constructor(
    private http: Http
  ) {}

  // get our Cart Items 
  // Observeables return a set of data i.e.: Items
  getCartItems(): Observable<Item[]> {
    return this.http
      // where we to get the data from get method angular/http
      .get('/api/cart')
      // in what form to do we want the data returned map method rxjs
      .map((response: Response) => response.json())
      // if there is an error give me an error catch method throw method - rxjs
      .catch((error: any) => Observable.throw(error.json()));
  }

  // Observeables return a set of data i.e.: Products
  getProducts(): Observable<Product[]> {
    return this.http
      // where do I get the data from? get method angular http
      .get('/api/products')
      // in what form you we want it returned map method rxjs
      .map((response: Response) => response.json())
      // if there is an error give me an error in json  
      // catch method and throw method imported from rxjs 
      .catch((error: any) => Observable.throw(error.json()));
  }
}