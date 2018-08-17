import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

//ChangeDectionStartegey.OnPush
// onPush is good for speeding up application with stateless or presentational components
// stateless components - doesnt typically have loocal state or keep state in the local directy
// will emit the via an even output , EventEmitter

@Component({
  selector: 'example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      
      <button (click)="update()">Internal update</button>
      <p>* should not update</p>
    </div>
  `
})
export class ExampleOneComponent {
  @Input()
  user;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
