import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFocusComponent } from './product-focus.component';

describe('ProductFocusComponent', () => {
  let component: ProductFocusComponent;
  let fixture: ComponentFixture<ProductFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
