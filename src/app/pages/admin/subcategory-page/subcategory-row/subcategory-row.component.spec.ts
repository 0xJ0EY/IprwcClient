import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryRowComponent } from './subcategory-row.component';

describe('SubcategoryRowComponent', () => {
  let component: SubcategoryRowComponent;
  let fixture: ComponentFixture<SubcategoryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
