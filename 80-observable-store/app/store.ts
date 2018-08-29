import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { State } from './state';

const state: State = {
  playlist: undefined
};

export class Store {
  // initializes state
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  // return the value i.e.: playlist: undefined
  get value() {
    return this.subject.value;
  }

  // access the store 
  select<T>(name: string): Observable<T> {
    // will return the property on the object
    return this.store.pluck(name);
  }

  // set items on the store 
  set(name: string, state: any) {
    this.subject.next({
      // object spread: expands an expression or array 
      ...this.value, [name]: state
    });
  }

}