import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// import in the component you are testing 
import { StockCounterComponent } from './stock-counter.component';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('StockCounterComponent', () => {
  
  // set the component to a varaiable 
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;

    component.value = 0;
  });

  // in your it block...
  it('should increment correctly', () => {
    // call the method that you are testing i.: componet.increment
    component.increment()
    // what the expected output should be 
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    // here we to call the increment method first so that we can test the decrement method. 
    // value is initialy set to 0  in the componet
    // go up first then down
    component.increment()
    expect(component.value).toBe(1);
    component.decrement()
    expect(component.value).toBe(0);
  }); 

  it('should not decrement below the minimum value', () => {
    component.increment()
    expect(component.value).toBe(1);
    component.decrement()
    expect(component.value).toBe(0);
    component.decrement()
    expect(component.value).toBe(0);
  });

  it('should not increment below the maximum value', () => {
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  });

});
