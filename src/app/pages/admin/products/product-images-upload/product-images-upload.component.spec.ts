import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesUploadComponent } from './product-images-upload.component';

describe('ProductImagesUploadComponent', () => {
  let component: ProductImagesUploadComponent;
  let fixture: ComponentFixture<ProductImagesUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImagesUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImagesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
