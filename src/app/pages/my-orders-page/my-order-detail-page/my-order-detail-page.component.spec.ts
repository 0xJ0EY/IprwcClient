import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderDetailPageComponent } from './my-order-detail-page.component';

describe('MyOrderDetailPageComponent', () => {
  let component: MyOrderDetailPageComponent;
  let fixture: ComponentFixture<MyOrderDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
