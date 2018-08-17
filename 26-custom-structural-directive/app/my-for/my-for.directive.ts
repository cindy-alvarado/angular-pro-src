import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {
    this.view.clear();
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        // an implicit value is attribute on a element that does not have a value
        $implicit: item,
        // creates a variable with same name
        index
      });
    });
  }


  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}