import { Component, ViewEncapsulation } from '@angular/core';

// writing global styles into the dom

@Component({
  selector: 'example-three',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .example-one {
      border: 2px solid green;
    }
  `],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!
    </div>
  `
})
export class ExampleThreeComponent {

}
