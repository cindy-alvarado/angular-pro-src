import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement } from '@angular/core';
import { StockCounterComponent } from './stock-counter.component';
import { By } from '@angular/platform-browser';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

/** class ComponentFixture<T> {
  constructor(componentRef: ComponentRef<T>, ngZone: NgZone | null, _autoDetect: boolean)
  debugElement: DebugElement
  componentInstance: T
  nativeElement: any
  elementRef: ElementRef
  changeDetectorRef: ChangeDetectorRef
  componentRef: ComponentRef<T>
  ngZone: NgZone | null
  detectChanges(checkNoChanges: boolean = true): void
  checkNoChanges(): void
  autoDetectChanges(autoDetect: boolean = true)
  isStable(): boolean
  whenStable(): Promise<any>
  whenRenderingDone(): Promise<any>
  destroy(): void
} **/

describe('StockCounterComponent', () => {

  let component: StockCounterComponent;
  // imported from angular core testing
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.value = 0;
  });

  it('should increment when the + button is clicked', () => {
    el.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
  });

  it('should increment the value when the up arrow is pressed', () => {
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';
    el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });

});
