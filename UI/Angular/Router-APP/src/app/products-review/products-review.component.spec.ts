import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsReviewComponent } from './products-review.component';

describe('ProductsReviewComponent', () => {
  let component: ProductsReviewComponent;
  let fixture: ComponentFixture<ProductsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
