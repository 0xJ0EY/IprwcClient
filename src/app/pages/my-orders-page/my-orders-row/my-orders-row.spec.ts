import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersRowComponent } from './my-orders-row.component';

describe('MyOrdersRowComponent', () => {
  let component: MyOrdersRowComponent;
  let fixture: ComponentFixture<MyOrdersRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
