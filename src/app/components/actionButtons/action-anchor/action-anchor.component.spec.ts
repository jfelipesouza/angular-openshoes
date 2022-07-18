import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAnchorComponent } from './action-anchor.component';

describe('ActionAnchorComponent', () => {
  let component: ActionAnchorComponent;
  let fixture: ComponentFixture<ActionAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionAnchorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
