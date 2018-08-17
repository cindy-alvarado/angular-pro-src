// allows use to create a component 

import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

// import AuthFormComponent
import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- injecting the componet using template ref-->
      <div #entry></div>
    </div>
  `
})

// AfterContentInit - change the data before the view has been initialized
export class AppComponent implements AfterContentInit {


  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  // create a compoent factory
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  // change the data before the view has been initialized
  ngAfterContentInit() {
    // resolves the component - just pass in the AuthFormComponent
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

    // create your component
    const component = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}