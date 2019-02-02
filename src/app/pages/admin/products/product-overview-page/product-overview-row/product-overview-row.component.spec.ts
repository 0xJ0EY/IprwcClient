import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewRowComponent } from './product-overview-row.component';

describe('ProductOverviewRowComponent', () => {
  let component: ProductOverviewRowComponent;
  let fixture: ComponentFixture<ProductOverviewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOverviewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
