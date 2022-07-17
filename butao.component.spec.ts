import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButaoComponent } from './butao.component';

describe('ButaoComponent', () => {
  let component: ButaoComponent;
  let fixture: ComponentFixture<ButaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
