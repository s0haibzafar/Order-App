import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGraphComponent } from './order-graph.component';

describe('OrderGraphComponent', () => {
  let component: OrderGraphComponent;
  let fixture: ComponentFixture<OrderGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
