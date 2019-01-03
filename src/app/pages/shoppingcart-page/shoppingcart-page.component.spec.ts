import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartPageComponent } from './shoppingcart-page.component';

describe('ShoppingcartPageComponent', () => {
  let component: ShoppingcartPageComponent;
  let fixture: ComponentFixture<ShoppingcartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
