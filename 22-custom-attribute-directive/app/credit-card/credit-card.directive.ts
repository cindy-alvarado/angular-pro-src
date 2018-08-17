import { Directive, ElementRef } from '@angular/core';


// use the @Directive decorator in your component file 
// cannot have a template

// config object specifing 
@Directive({
  selector: '[credit-card]'
})

// exported class should be imported to you app module
export class CreditCardDirective {

  // how to inject things into your custom directive
 
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}