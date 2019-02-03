import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRowComponent } from './users-row.component';

describe('MyOrdersRowComponent', () => {
  let component: UsersRowComponent;
  let fixture: ComponentFixture<UsersRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
