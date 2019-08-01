import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMoviesComponent } from './order-movies.component';

describe('OrderMoviesComponent', () => {
  let component: OrderMoviesComponent;
  let fixture: ComponentFixture<OrderMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
