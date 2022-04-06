import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLimitComponent } from './products-limit.component';

describe('ProductsLimitComponent', () => {
  let component: ProductsLimitComponent;
  let fixture: ComponentFixture<ProductsLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
